import React from 'react'
import { useHeroContext } from '../context/HeroContext'


function HeroDetail() {
    const { details, heroeDetail, showDetails } = useHeroContext()
    
    console.log(heroeDetail);
    const closeCardDetail = () => {
        showDetails(heroeDetail)
    }

    return (
        <div className="row cont-hero-detail" style={{ display: `${details}` }}>
            <div className="col">
                <img onClick={closeCardDetail} className='close-detail' src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png" />
                <h5 className='title-detail'>DETAILS</h5>
                <span className='details'>peso: {heroeDetail && heroeDetail.appearance.weight[1]} </span>
                <span className='details'>altura: {heroeDetail && heroeDetail.appearance.height[1]}</span>
                <span className='details'>nombre: {heroeDetail && heroeDetail.name}</span>
                <span className='details'>alias: {heroeDetail && heroeDetail.biography.aliases[0]}</span>
                {/* <span className='details'>color de ojos: {heroeDetail && heroeDetail.appearance.eye-color}</span> */}
                {/* <span className='details'>color de cabello: {heroeDetail && heroeDetail.appearance.hair-color}</span> */}
                <span className='details'>lugar de trabajo: {heroeDetail && heroeDetail.work.occupation}</span>
            </div>
        </div>
    )
}

export default HeroDetail
