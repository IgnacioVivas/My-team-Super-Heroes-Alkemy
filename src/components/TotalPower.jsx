import React from 'react'


function TotalPower({ orderPowers, promedioAltura, promedioPeso }) {
   
    

   
    return (
        <div className="container cont-total-powers">
            <div className="row total-powers">
                <h2>MY TEAM</h2>
                <div className="col-12 powers">
                    {orderPowers && orderPowers.map((power, key) => <span key={key}> {power.name}:  %{power.value}</span> )}
                </div>
                <div className="col-12 alturaPeso">
                    <span>altura promedio: {promedioAltura}cm</span>
                    <span>peso promedio: {promedioPeso}kg</span>
                </div>
            </div>
        </div>
    )
}

export default TotalPower
