import React from 'react'
import styled from '@emotion/styled'

const Condition = (props) => {
    const Temp = styled.h1`
        font-family: 'Fira Sans',sans-serif;
        font-size: 2rem;
    `
    const State = styled.h3`
        font-family: 'Hammersmith One',sans-serif;
        font-size: 1.2rem;
    `
    return (
        <>
        <Temp className='temp'>32°C</Temp>
        <State className='condition'>Sunny</State>
        </>
     );
}
 
export default Condition;
