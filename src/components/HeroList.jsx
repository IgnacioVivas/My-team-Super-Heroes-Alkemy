import React from 'react'
import Hero from './Hero'

function HeroList({ valorBusqueda }) {
    return (

        <div className='hero-list container'>
            <div className="list row">
                {
                    valorBusqueda && valorBusqueda.map((hero) => <Hero key={hero.id} hero={hero}></Hero>)
                }
            </div>

        </div>
    )
}

export default HeroList
