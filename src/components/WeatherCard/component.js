import React from 'react'
import styled from '@emotion/styled'
import Location from './location'
import Icon from './icon'
import Condition from './condition'

const WeatherCard = (props) => {

    let highcolor,lowcolor;
    let bg;
    if(props.temp > 12){
        highcolor = (1-(props.temp-12)/28)*255;
        lowcolor = highcolor - 150;
        bg = ` linear-gradient(to top,rgb(255,${highcolor},0),rgb(255,${lowcolor},0))`
    }
    else{
        highcolor = (1-(props.temp+20)/32)*255;
        lowcolor = highcolor - 150;
        bg = ` linear-gradient(to top,rgb(0,${highcolor},255),rgb(0,${lowcolor},255))`
    }
    
    const Card = styled.div`
        background:${bg};
        width: 200px;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 0 auto;
        align-items: center;
        border-radius: 15px;
    `;
    return (  
        <Card>
            <Location/>
            <Icon/>
            <Condition temp={props.temp}/>
        </Card>
    );
}
 
export default WeatherCard;