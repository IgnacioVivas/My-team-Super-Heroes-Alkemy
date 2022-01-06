import React from 'react'
import { useHeroContext } from '../context/HeroContext';
import noImage from '../assets/images/no-image.jpg'

function Hero({ hero }) {

    const { addToTeam } = useHeroContext()

    const addHero = () => {
        addToTeam(hero)
    }

    return (
        <div className="col-12 col-sm-4 col-lg-3 col-xl-2 card">
            <div className='cont-img-card'>
                <img src={hero.image.url} />
            </div>
            <div className='cont-name-card'>
                <h3>{hero.name}</h3>
                <p>{hero.biography.alignment}</p>
            </div>
            <div className='cont-powerstats'>
                <div className='powerstats'>
                    <span>combat:</span>
                    <span>durability:</span>
                    <span>intelligence:</span>
                    <span>power:</span>
                    <span>speed:</span>
                    <span>strength:</span>
                </div>
                <div className='powerstats'>
                    <span>{hero.powerstats.combat}</span>
                    <span>{hero.powerstats.durability}</span>
                    <span>{hero.powerstats.intelligence}</span>
                    <span>{hero.powerstats.power}</span>
                    <span>{hero.powerstats.speed}</span>
                    <span>{hero.powerstats.strength}</span>
                </div>
            </div>
            <div className='cont-btn-card'>
                <button onClick={addHero}>agregar</button>
            </div>

        </div>
    )
}

export default Hero
