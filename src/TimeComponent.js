const TimeComponent = ({time}) => {
    return <p className="time-box"> {time.hours} : {time.minutes} : {time.seconds} </p>
}

export default TimeComponent