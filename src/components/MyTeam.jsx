import React from 'react'
import { useHeroContext } from '../context/HeroContext'
import { Link } from 'react-router-dom'
import CardTeam from './CardTeam'
import PercentajePowers from './PercentajePowers'
import HeroDetail from './HeroDetail'
import { useState, useEffect } from 'react'

function MyTeam() {

    const { team, viewMyTeam, setViewMyTeam } = useHeroContext()
    console.log(team);



    useEffect(() => {

        if (team.length === 0) {
            setViewMyTeam(false)
            console.log("entro al if");
        } else {
            setViewMyTeam(true)
        }

    }, [])


    return (
        <>
            {
                viewMyTeam ?
                    <>
                        <div className="container cont-arrow">
                            <div className="row">

                                <Link to={`/home`} className='arrow'>
                                    <img src="https://img.icons8.com/pastel-glyph/48/000000/circled-left.png" />
                                </Link>

                            </div>
                        </div>
                        <PercentajePowers></PercentajePowers>
                        <div className='container cont-my-team'>
                            <HeroDetail></HeroDetail>
                            <div className="list-my-team row">
                                {
                                    team && team.map((hero) => <CardTeam key={hero.id} hero={hero}></CardTeam>)
                                }
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="container cont-no-hero">
                            <div className="row">
                                <div className="col no-hero">
                                    <h3>there is no hero in your team</h3>
                                    <Link to={`/home`}>
                                        <button className='btn-no-hero'>Go back</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
            }


        </>
    )

}



export default MyTeam
