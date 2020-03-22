import React, { useEffect, useState } from 'react';
import classes from './GameTimer.module.css';

const GameTimer = (props) => {
    const [displayMinutes, setDisplayMinutes] = useState(0);
    const [displaySeconds, setDisplaySeconds] = useState(0);
    const [lastMinute, setLastMinute] = useState(false);
    
    useEffect(() => {
        setDisplaySeconds(props.seconds % 60)
        setDisplayMinutes(Math.floor(props.seconds / 60))

        if (lastMinute && props.seconds === 0) {
            props.chooseCardAlert();
        }

        if (props.seconds === 0) {
            document.getElementById('GameTimerContainer').className = classes.redText;
            props.increaseTimeHandler(60);
            setLastMinute(true);
            props.lockChatHandler();
        } else {
            setTimeout(() => {
                props.increaseTimeHandler(props.seconds - 1)
            }, 1000)
        }
        
    }, [props.seconds])

    return (
        <div id='GameTimerContainer' className={classes.timeText}>
            Tid kvar: {displayMinutes < 10 ? `0${displayMinutes}` : `${displayMinutes}`}:{displaySeconds < 10 ? `0${displaySeconds}` : `${displaySeconds}`}
        </div>
    )
}

export default GameTimer;