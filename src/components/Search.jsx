import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import HeroList from './HeroList'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import  Spinner  from 'react-bootstrap/Spinner'


function Search() {
    const MySwal = withReactContent(Swal);

    const [busqueda, setBusqueda] = useState();
    const [valorBusqueda, setValorBusqueda] = useState();
    const [loading, setLoanding] = useState(false)

    const handleChange = e => {
        setBusqueda(e.target.value)
        console.log("Busqueda: " + e.target.value);
    }




    const handleSubmit = e => {
        e.preventDefault();

        setLoanding(true)
        axios
            .get('https://superheroapi.com/api.php/4426838174098225/search/' + busqueda)
            .then((res) => {
                if (res.data.response === "success") {
                    setValorBusqueda(res.data.results)
                    window.scroll({
                        top: 750,
                        behavior: 'smooth'
                    })
                } else {
                    alert("no se encontro ningun resultado en la busqueda")
                }
            })
            .catch((error) => {
                console.log("error:", error);
            })
            .finally(() => setLoanding(false))

    }


    return (
        <>
            <div className="row cont-search">
                <div className="col-12">
                    <form className="d-flex flex-column align-items-center" id='formSearch' onSubmit={handleSubmit}>
                        <input className="me-2" type="search" placeholder="search team" aria-label="Search" onChange={handleChange} />
                        <button className="" type="submit">
                            {
                                loading ?
                                    <Spinner animation="border" role="status">
                                        < span className="visually-hidden" > Loading...</span >
                                    </Spinner >
                                    :
                                    "Search"

                            }
                        </button>
                    </form>
                </div>
            </div>
            <HeroList valorBusqueda={valorBusqueda}></HeroList>
        </>
    )
}

export default Search
