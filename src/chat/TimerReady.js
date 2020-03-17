import React, { useState, useEffect } from 'react';

const firebase = require('firebase');

function TimerReady({currentUsers}) {
    const [seconds, setSeconds] = useState(0);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        let interval = null;

        setLimit(50);
        
        if (seconds >= limit) {
            // setLimit(50)

            if (limit === 300) {
                setLimit(60)
            }

            setSeconds(0);

            const d = new Date();
            const secondStamp = d.getSeconds();
            const minuteStamp = d.getMinutes();
            const hourStamp = d.getHours();

            const strSecondStamp = secondStamp < 10 ? `0${secondStamp}` : `${secondStamp}`;
            const strMinuteStamp = minuteStamp < 10 ? `0${minuteStamp}` : `${minuteStamp}`;
            const strHourStamp = hourStamp < 10 ? `0${hourStamp}` : `${hourStamp}`;
            
            firebase
                .firestore()
                .collection('chats')
                .doc(currentUsers)
                .update({
                    messages: firebase.firestore.FieldValue.arrayUnion({
                        sender: 'Admin',
                        message: 'Är ni redo att gå till beslut?',
                        senderImgURL: 'none',
                        timestamp: `${strHourStamp}:${strMinuteStamp}:${strSecondStamp}`
                    })
                }).then(() => {
                    console.log('Adminmeddelande skapat!')
                })
        }

        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        
        return () => clearInterval(interval);
    }, [seconds, currentUsers]);

    return (
        <div>
            
        </div>
    );
};

export default TimerReady;