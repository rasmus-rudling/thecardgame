import React, { useState, useEffect } from 'react';

function Timer({otherChats, handleChange}) {
    const [limit, setLimit] = useState(2);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval = null;
        // console.log(`seconds = ${seconds}`)
        // console.log(`limit = ${limit}`)

        if (seconds >= limit) {
            setSeconds(0);
            handleChange(otherChats)
            
            setLimit(Math.round(Math.random() * 2) + 5);
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