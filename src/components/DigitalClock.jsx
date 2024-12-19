import { useState, useEffect } from 'react'

function DigitalClock() {


    const [time, setTime] = useState(new Date());

    // only run once on mount
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        setTime(new Date())

        //clean up
        return () => clearInterval(interval)
    }, [])

    const getTime = (time) => {
        const pmAm = time.getHours() >= 12 ? 'PM' : 'AM'
        return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${pmAm}`
    }


    return (
        <div className="clock-container">
            <div className="clock">
                <span>{getTime(time)}</span> 
                
            </div>
        </div>
    )
}

export default DigitalClock;