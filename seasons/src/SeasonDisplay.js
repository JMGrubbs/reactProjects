import './SeasonDisplay.css';
import React from 'react'


const seasonConfig = {
    summer: {
        text: "Let's go to the beach!",
        iconName: 'sun'
    }, 
    winter:{
        text: "Burr, its chilly!",
        iconName: 'snowflake'
    }
}


const getSeason = (month, lat)=>{
    if(lat > 0 && month > 2 && month < 9){
        return "summer"
    }
    else if( lat < 0 && month < 2 && month > 9){
       return "winter"
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.month, props.lat);
    // const { text, iconName } = seasonConfig[season]
    const { text, iconName } = seasonConfig[season] || {} // Adding the or here fixes the "unidentified object" error on first render
    return(
        <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay;