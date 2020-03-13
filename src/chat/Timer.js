import React, { useState, useEffect } from 'react';

function Timer({otherChats, handleChange}) {
    const [limit, setLimit] = useState(2);
    const [seconds, setSeconds] = useState(0);

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
        // console.log(`seconds = ${seconds}`)
        // console.log(`limit = ${limit}`)
        console.log(seconds)

        if (seconds >= limit) {
            setSeconds(0);
            handleChange(otherChats)
            
            const randIntNormal = Math.round(randn_bm(2, 15, 2));
            console.log(randIntNormal, 'rand')
            setLimit(randIntNormal);
        }

        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        
        return () => clearInterval(interval);
    });

    return (
        <div>
            
        </div>
    );
};

export default Timer;