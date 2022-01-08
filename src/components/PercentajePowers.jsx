import React from 'react'
import { useHeroContext } from '../context/HeroContext'
import TotalPower from './TotalPower';


function PercentajePowers() {

    const { team } = useHeroContext()

    let promedioCombat;
    let promedioDurability;
    let promedioIntelligence;
    let promedioPower;
    let promedioSpeed;
    let promedioStrength;
    let promedioAltura;
    let promedioPeso;
    let valores = [];
    let valorAlturaPeso= [];



    for (let i = 0; i < team.length; i++) {
        if (team[i].appearance.height[1] !== "null") {
            valorAlturaPeso.push(parseInt(team[i].appearance.height[1].slice(0, -3)));
        } else {
            valorAlturaPeso.push(0)
        }
    }
    promedioAltura = Math.round(valorAlturaPeso.reduce((a, b) => a + b, 0) / valorAlturaPeso.length);


    for (let i = 0; i < team.length; i++) {
        if (team[i].appearance.weight[1] !== "null") {
            valorAlturaPeso.push(parseInt(team[i].appearance.weight[1].slice(0, -3)));
        } else {
            valorAlturaPeso.push(0)
        }
    }
    promedioPeso = Math.round(valorAlturaPeso.reduce((a, b) => a + b, 0) / valorAlturaPeso.length);



    for (let i = 0; i < team.length; i++) {
        if (team[i].powerstats.combat !== "null") {
            valores.push(parseInt(team[i].powerstats.combat))
        } else {
            valores.push(0)
        }
    }
    promedioCombat = Math.round(valores.reduce((a, b) => a + b, 0) / valores.length);


    for (let i = 0; i < team.length; i++) {
        if (team[i].powerstats.durability !== "null") {
            valores.push(parseInt(team[i].powerstats.durability))
        } else {
            valores.push(0)
        }
    }
    promedioDurability = Math.round(valores.reduce((a, b) => a + b, 0) / valores.length);


    for (let i = 0; i < team.length; i++) {
        if (team[i].powerstats.intelligence !== "null") {
            valores.push(parseInt(team[i].powerstats.intelligence))
        } else {
            valores.push(0)
        }
    }
    promedioIntelligence = Math.round(valores.reduce((a, b) => a + b, 0) / valores.length);


    for (let i = 0; i < team.length; i++) {
        if (team[i].powerstats.power !== "null") {
            valores.push(parseInt(team[i].powerstats.power))
        } else {
            valores.push(0)
        }
    }
    promedioPower = Math.round(valores.reduce((a, b) => a + b, 0) / valores.length);


    for (let i = 0; i < team.length; i++) {
        if (team[i].powerstats.speed !== "null") {
            valores.push(parseInt(team[i].powerstats.speed))
        } else {
            valores.push(0)
        }
    }
    promedioSpeed = Math.round(valores.reduce((a, b) => a + b, 0) / valores.length);


    for (let i = 0; i < team.length; i++) {
        if (team[i].powerstats.strength !== "null") {
            valores.push(parseInt(team[i].powerstats.strength))
        } else {
            valores.push(0)
        }
    }
    promedioStrength = Math.round(valores.reduce((a, b) => a + b, 0) / valores.length);

    const combat = {
        name: "Combat",
        value: promedioCombat
    }
    const durability = {
        name: "Durability",
        value: promedioDurability
    }
    const intelligence = {
        name: "Intelligence",
        value: promedioIntelligence
    }
    const power = {
        name: "Power",
        value: promedioPower
    }
    const speed = {
        name: "Speed",
        value: promedioSpeed
    }
    const strength = {
        name: "Strength",
        value: promedioStrength
    }

    let orderPowers = [combat,durability, intelligence, power, speed, strength]
    orderPowers.sort(function (a, b) {
        if (a.value < b.value) {
          return 1;
        }
        if (a.value > b.value) {
          return -1;
        }
        return 0;
      })

    return (
        <>
            <TotalPower orderPowers={ orderPowers } promedioAltura={ promedioAltura } promedioPeso={ promedioPeso }></TotalPower>
        </>
    )
}

export default PercentajePowers
