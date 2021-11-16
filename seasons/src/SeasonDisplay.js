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
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season]
    console.log(season)
    
    return (
        <div>
            <i className={`${iconName} icon`} />
            <h3>{text}</h3>
            <i className={`${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay