import React, { useState, useEffect } from 'react';

function Timer({otherChats, handleChange}) {
    const [limit, setLimit] = useState(120);
    const [seconds, setSeconds] = useState(0);
    const [totSeconds, setTotSeconds] = useState(-120);

    function randn_bm(min, max, skew) {
        let u = 0, v = 0;
        while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random();
        let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    
        num = num / 10.0 + 0.5; // Translate to 0 -> 1
        if (num > 1 || num < 0) num = randn_bm(min, max, skew); // resample between 0 and 1 if out of range
        num = Math.pow(num, skew); // Skew
        num *= max - min; // Stretch to fill range
        num += min; // offset to min

        return num;
    }

    useEffect(() => {
        let interval = null;

        if (seconds >= limit) {
            setSeconds(0);
            let randIntNormal;

            if (totSeconds < 20) {
                handleChange(3, 12, 1, otherChats)
                randIntNormal = Math.round(randn_bm(2, 12, 1));
                setLimit(randIntNormal);
            } else if (totSeconds < 55) {
                handleChange(2, 35, 2, otherChats)
                randIntNormal = Math.round(randn_bm(2, 30, 1));
                setLimit(randIntNormal);
            } else if (totSeconds < 90) {
                handleChange(2, 12, 2, otherChats)
                randIntNormal = Math.round(randn_bm(3, 12, 3));
                setLimit(randIntNormal);
            } else if (totSeconds < 100) {
                handleChange(2, 12, 3, otherChats)
                randIntNormal = Math.round(randn_bm(2, 12, 1));
                setLimit(randIntNormal);
            } else {
                handleChange(3, 35, 2, otherChats)
                randIntNormal = Math.round(randn_bm(2, 30, 1));
                setLimit(randIntNormal);
            }
        }

        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            setTotSeconds(totSeconds => totSeconds + 1);
        }, 1000);
        
        return () => clearInterval(interval);
    });

    return (
        <div>
            
        </div>
    );
};

export default Timer;