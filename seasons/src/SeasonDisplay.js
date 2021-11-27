import './SeasonDisplay.css'

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun',
    },
    winter: {
        text: "Burr it's cold!",
        iconName: 'snowflake',
    },
}

const getSeason = (lat, month) => {
    //- check for apr to sep
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } 
    //- rest of the months (oct to mar)
    else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season]
    console.log(season)
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h3>{text}</h3>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay