import React from 'react'

const WeatherCard = (props) => {
    return (  
        <div className="card">
            <div className='location'>
                <h1 className='city'>New Delhi</h1>
                <h3 className='country'>IN</h3>
            </div>
            <img className='icon' src="./img/sun.png" alt="Weather Icon"/>
            <h1 className='temp'>32 °C</h1>
            <h3 className='condition'>Sunny</h3>
        </div>
    );
}
 
export default WeatherCard;