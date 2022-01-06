import React from 'react'
import { useHeroContext } from '../context/HeroContext';


function CardTeam({ hero }) {

    const { removeHero, showDetails } = useHeroContext()

    const deleteHero = () => {
        removeHero(hero)
    }
    const viewDetail = () => {
        showDetails(hero)
    }

    return (
        <div onClick={viewDetail} className="col card-team">
            <div className='cont-img-card-team'>
                <img src={hero.image.url} alt="" />

            </div>
            <div className='cont-name-card-team'>
                <h3>{hero.name}</h3>
                <p>{hero.biography.alignment}</p>
            </div>
            <div className='cont-powerstats-team'>
                <div className='powerstats-team'>
                    <span>combat:</span>
                    <span>durability:</span>
                    <span>intelligence:</span>
                    <span>power:</span>
                    <span>speed:</span>
                    <span>strength:</span>
                </div>
                <div className='powerstats-team'>
                    <span>{hero.powerstats.combat}</span>
                    <span>{hero.powerstats.durability}</span>
                    <span>{hero.powerstats.intelligence}</span>
                    <span>{hero.powerstats.power}</span>
                    <span>{hero.powerstats.speed}</span>
                    <span>{hero.powerstats.strength}</span>
                </div>
            </div>
            <div className='cont-btn-card-team'>
                <button onClick={deleteHero}>eliminar</button>
            </div>
        </div>
    )
}

export default CardTeam
