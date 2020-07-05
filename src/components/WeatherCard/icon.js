import React from 'react'
import styled from '@emotion/styled'

const Icon = (props) => {

    let icon = `./img/WeatherIcons/${props.condition}-2x.png`;

    const Icon = styled.img`
        width: 30%;
    `;
    
    return (  
        <Icon className='icon' src={icon} alt="Weather Icon"/>
    );
}
 
export default Icon;