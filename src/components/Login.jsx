import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useLoginContext } from '../context/LoginContext'
import imgLogin from '../assets/images/img-login.png'
import Spinner from 'react-bootstrap/Spinner'


function Login() {

    const { evaluateAuthorization } = useLoginContext();
    let history = useHistory();

    const [formEnviado, setFormEnviado] = useState(false)
    const [loading, setLoading] = useState(false)

    return (

        <div className="container-fluid cont-login" style={{ backgroundImage: `url(${imgLogin})` }}>
            <div className="row">
                <div className="col login">
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validate={(valores) => {
                            let errores = {};

                            if (!valores.email) {
                                errores.email = "Enter a valid email address";
                            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                                errores.email = "The email is invalid"
                            }

                            if (!valores.password) {
                                errores.password = "Enter a valid password";
                            } else if (! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.password)) {
                                errores.password = "The password you enter is invalid"
                            }

                            return errores;
                        }}
                        onSubmit={(valores, { resetForm }) => {
                            resetForm();
                            console.log(valores);
                            console.log("formulario enviado");
                            setLoading(true);
                            axios
                                .post('http://challenge-react.alkemy.org/', valores)
                                .then((resp) => {
                                    console.log(resp);
                                    evaluateAuthorization(true)
                                    history.push('/home')
                                    localStorage.setItem("Token", resp.data.token);
                                })
                                .catch((err) => {
                                    alert("revise los campos");
                                    evaluateAuthorization(false)
                                })
                                .finally(() => setLoading(false));
                            setTimeout(() => {
                                setFormEnviado(true)
                            }, 3000);
                        }}
                    >
                        {({ errors }) => (

                            <Form>
                                {console.log(errors)}
                                <div>
                                    <label htmlFor="email" className='label-login'>email</label>
                                    <Field
                                        type="text"
                                        id="email"
                                        name="email"
                                    />
                                    <ErrorMessage name="email" component={() => (
                                        <div className='error-login'>{errors.email}</div>
                                    )} />

                                </div>

                                <div>
                                    <label htmlFor="password" className='label-login'>password</label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                    />
                                    <ErrorMessage name="password" component={() => (
                                        <div className='error-login'>{errors.password}</div>
                                    )} />
                                </div>

                                <div>
                                    <button type="submit" >
                                        {
                                            loading ?
                                                <Spinner animation="border" role="status" style={{width:"28px", height: "28px", margin: "auto"}}>
                                                </Spinner >
                                                :
                                                'LOGIN'
                                                
                                        }
                                    </button>
                                    {formEnviado && <p>exito!</p>}
                                </div>

                            </Form>
                        )}

                    </Formik>
                </div>
            </div>
        </div>

    )
}

export default Login
