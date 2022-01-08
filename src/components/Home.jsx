import React from 'react'
import img1 from '../assets/images/img1.png'
import Search from './Search'
import FloatingBtn from './FloatingBtn'
import { Redirect } from 'react-router-dom'
import { useLoginContext } from '../context/LoginContext'
import { useHeroContext } from '../context/HeroContext'


function Home() {

    const { isAuthorized } = useLoginContext();
    const { team } = useHeroContext();

    if (!isAuthorized) {
        return <Redirect to='/login' />;
    }

    return (
        <>
            <div className="container-fluid cont-banner" style={{ backgroundImage: `url(${img1})` }}>
                <div className="row">
                    <div className="col-12">
                        <h1>Super Hero</h1>
                        {
                            team.length === 0 ?
                                <span className='span-title'>You don't have a team yet, start searching and adding a hero.</span>
                                :
                                <span className='span-title'>Keep adding heroes to complete your team with six.</span>

                        }
                    </div>
                </div>
                <Search></Search>
                <FloatingBtn></FloatingBtn>
            </div>
        </>
    )
}

export default Home
