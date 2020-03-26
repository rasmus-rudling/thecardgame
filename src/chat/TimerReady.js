import React, { useState, useEffect } from 'react';

const firebase = require('firebase');

function TimerReady({currentUsers, startTimer}) {
    const [seconds, setSeconds] = useState(0);
    const [limit, setLimit] = useState(240);

    useEffect(() => {
        let interval = null;

        if (seconds >= limit) {

            setLimit(45);

            setSeconds(0);

            const d = new Date();
            const secondStamp = d.getSeconds();
            const minuteStamp = d.getMinutes();
            const hourStamp = d.getHours();

            const strSecondStamp = secondStamp < 10 ? `0${secondStamp}` : `${secondStamp}`;
            const strMinuteStamp = minuteStamp < 10 ? `0${minuteStamp}` : `${minuteStamp}`;
            const strHourStamp = hourStamp < 10 ? `0${hourStamp}` : `${hourStamp}`;
            
            // console.log(`[TimerReady.js] ${currentUsers}`)
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
                    }),
                    usersVoted: []
                }).then(() => {
                    console.log('Adminmeddelande skapat!')
                })
        }

        interval = setInterval(() => {
            if (startTimer) {
                setSeconds(seconds => seconds + 1);
            }
            
        }, 1000);
        
        return () => clearInterval(interval);
    }, [seconds, currentUsers, startTimer]);

    return (
        <div>
            
        </div>
    );
};

export default TimerReady;