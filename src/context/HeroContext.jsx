import React from 'react'
import { useContext, useState } from 'react'
import { createContext } from 'react'


const HeroContext = createContext()
export const useHeroContext = () => useContext(HeroContext)


function HeroContextProvider({ children }) {

    const [team, setTeam] = useState([])
    const [viewMyTeam, setViewMyTeam] = useState(false)

    function addToTeam(hero) {
        if (team.length < 6) {
            if (isInTeam(hero.id)) {
                alert("no se pueden agregar al equipo");
            } else {
                if (hero.biography.alignment === "good") {
                    verifyGoodHeroes(hero)
                } else if (hero.biography.alignment === "bad") {
                    verifyBadHeroes(hero)
                } else {
                    setTeam([...team, hero]);
                }




            }
        } else {
            alert("tu equipo esta completo")
        }
    }

    const isInTeam = (id) => {
        return team.find(element => element.id === id)
    }

    const arrayGoodHeroes = team.filter(element => element.biography.alignment === "good")

    const arrayBadHeroes = team.filter(element => element.biography.alignment === "bad")

    function verifyGoodHeroes(hero) {
        if (arrayGoodHeroes.length < 3) {
            setTeam([...team, hero]);
        } else {
            alert("no puedes tener mas personajes buenos");
        }
    }

    function verifyBadHeroes(hero) {
        if (arrayBadHeroes.length < 3) {
            setTeam([...team, hero]);
        } else {
            alert("no puedes tener mas personajes malos");
        }
    }

    function removeHero(hero) {
        let idHero = hero.id;
        const teamFilter = team.filter((element) => element.id !== idHero)
        setTeam([...teamFilter])
        if (teamFilter.length === 0) {
            setViewMyTeam(false)
        } else {
            setViewMyTeam(true)
        }
        
    }

    const [details, setDetails] = useState("none")
    const [heroeDetail, setHeroeDetail] = useState()

    function showDetails(hero) {
        if (details === "none") {
            setDetails("block")
        } else if (details === "block") {
            setDetails("none")
        }

        setHeroeDetail(hero)
    }



    return (
        <HeroContext.Provider value={{ team, addToTeam, removeHero, showDetails, details, heroeDetail, viewMyTeam, setViewMyTeam }}>
            {children}
        </HeroContext.Provider>
    )
}

export default HeroContextProvider
