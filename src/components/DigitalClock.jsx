import { useState, useEffect } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    const [isMilitary, setIsMilitary] = useState(false);

    // Update time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const toggleTimeFormat = () => {
        setIsMilitary((prev) => !prev);
    };

    const formatTime = (time) => {
        const hours = isMilitary ? time.getHours() : time.getHours() % 12 || 12;
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        const amPm = isMilitary ? '' : time.getHours() >= 12 ? 'PM' : 'AM';

        return `${hours}:${minutes}:${seconds} ${amPm}`;
    };

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime(time)}</span>
            </div>
            <button className="toggle-button" onClick={toggleTimeFormat}>
                {isMilitary ? 'Switch to 12 Hour' : 'Switch to Military Time'}
            </button>
        </div>
    );
}

export default DigitalClock;
