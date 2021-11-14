const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const text = season === 'winter' ? 'Burr, it\'s chilly' : 'Let\'s hit the beach'
    console.log(season)
    
    return (
        <div>
            {text}
        </div>
    )
}

export default SeasonDisplay