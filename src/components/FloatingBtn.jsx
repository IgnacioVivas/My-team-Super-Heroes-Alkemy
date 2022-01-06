import React from 'react'
import imgFlotante from '../assets/images/img-btn-flotante.png'
import { useHeroContext } from '../context/HeroContext'
import { Link } from 'react-router-dom'



function FloatingBtn() {

    const { team } = useHeroContext()


    return (
        <Link to={`/my-team`}>
            <div style={{ backgroundImage: `url(${imgFlotante})` }} className='btn-flotante' data-bs-toggle="tooltip" data-bs-placement="bottom" title="MY TEAM">
                <div className="contador">
                    <span>{team.length}</span>
                </div>

            </div>
        </Link>
    )
}

export default FloatingBtn
