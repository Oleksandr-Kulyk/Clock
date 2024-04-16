import { useEffect, useState } from "react"
import TimeComponent from "./TimeComponent";
import DateComponent from "./DateComponent";

const ClockComponent = () => {
    const [time, setTime] = useState({});
    const changeTime = () => {
        const date = new Date();
        const newTime = { 
            year:date.getFullYear(),
            month: (Number(date.getMonth()) + 1) < 10 ? '0' + (Number(date.getMonth()) + 1) : (Number(date.getMonth()) + 1),
            day: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
            hours: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(), 
            minutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
            seconds: date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(),
        }
        setTime(newTime);
    }
    useEffect(() => {
        let intervalId = setInterval(changeTime, 1000);
        return () => clearInterval(intervalId);
    }, [time]);

    return (
        <div className="clock-wrapper">
            <TimeComponent time={time} />
            <DateComponent time={time} />
        </div>
    )
}

export default ClockComponent