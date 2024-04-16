const DateComponent = ({time}) => {
    return <p className="date-box"> {time.day}-{time.month}-{time.year} </p>
}

export default DateComponent