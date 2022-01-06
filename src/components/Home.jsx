import React from 'react'
import img1 from '../assets/images/img1.png'
import Search from './Search'
import FloatingBtn from './FloatingBtn'
import { Redirect } from 'react-router-dom'
import { useLoginContext } from '../context/LoginContext'

function Home() {

    const { isAuthorized } = useLoginContext();

    if (!isAuthorized) {
        return <Redirect to='/login' />;
    }

    return (
        <>
            <div className="container-fluid cont-banner" style={{ backgroundImage: `url(${img1})` }}>
                <div className="row">
                    <div className="col-12">
                        <h1>Super Hero</h1>
                        <span className='span-title'>Aún no tienes equipo, empieza a buscar y a añadir un héroe.</span>
                    </div>
                </div>
                <Search></Search>
                <FloatingBtn></FloatingBtn>
            </div>
        </>
    )
}

export default Home
