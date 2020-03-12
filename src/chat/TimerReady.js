import React, { useState, useEffect } from 'react';

const firebase = require('firebase');

function TimerReady({currentUsers}) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval = null;
        // console.log(`seconds = ${seconds}`)
        // console.log(`limit = ${limit}`)

        if (seconds >= 30) {
            setSeconds(0);
            
            firebase
                .firestore()
                .collection('chats')
                .doc(currentUsers)
                .update({
                    messages: firebase.firestore.FieldValue.arrayUnion({
                        sender: 'Admin',
                        message: 'Är ni redo att gå till beslut?',
                        timestamp: Date.now()
                    })
                })
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

export default TimerReady;