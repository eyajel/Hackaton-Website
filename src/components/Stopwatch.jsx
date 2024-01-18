import React, { useEffect, useState } from "react";
import Circle from "./Circle";
import './stopwatch.css';


export default function Stopwatch({ targetDate , mode }){


    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
    };
   
    const [stopwatch,setStopwatch] =useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setInterval(() => {
          setStopwatch(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
    }, []);
    const titleStyle = mode === 'dark' ? { color: 'white' } : {};
    return(
        <div className="stopWatch" >
            <div className="stopwatchtext">
                <h1 className="stopwatchtitle" style={titleStyle}>Stay Tuned</h1>
                <p className="littletitle" style={titleStyle}>The hack will start in...</p>
            </div>
            <div className="circles">
                <Circle value={stopwatch.days} title="Days"/>
                <Circle value={stopwatch.hours} title="Hours"/>
                <Circle value={stopwatch.minutes} title="Minutes"/>
                <Circle value={stopwatch.seconds} title="Seconds"/>
                
            </div>
        </div>
    )
}