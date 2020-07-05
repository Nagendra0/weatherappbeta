import React from 'react'
import styled from '@emotion/styled'

const Icon = (props) => {

    const Icon = styled.img`
        width: 30%;
    `;
    return (  
        <Icon className='icon' src="./img/sun.png" alt="Weather Icon"/>
    );
}
 
export default Icon;