import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import Timer from './Timer';

const firebase = require('firebase');

function OtherTeam () {
    const [otherChats, setOtherChats] = useState([]);
    const [sentTexts0, setSentTexts0] = useState(0);
    const [sentTexts1, setSentTexts1] = useState(0);
    const [sentTexts2, setSentTexts2] = useState(0);
    const [fewestSentTexts, setFewestSentTexts] = useState(sentTexts0);

    const senders = [sentTexts0, sentTexts1, sentTexts2]

    const invisibleText = '　';
    const otherTeamNames = ['Axel Hagel', 'Elin Rudling', 'Niklas Löwbeer'];
    const otherTeamURL = ['https://i.imgur.com/IBlrCCT.jpg', 'https://i.imgur.com/wBeQrMt.jpg', 'https://i.imgur.com/GRSyGWE.jpg']

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
    
    const handleChange = (minSpace, maxSpace, skewSpace, ...otherChats) => {
        let tempArray = otherChats;
        let msg = "";
        let randomWhiteSpaces;

        randomWhiteSpaces = Math.round(randn_bm(minSpace, maxSpace, skewSpace));
        
        let randomSenderIdx = Math.round(Math.random() * 2);
        console.log(`idx1: ${randomSenderIdx}`)

        if (senders[randomSenderIdx] !== fewestSentTexts) {
            randomSenderIdx = Math.round(Math.random() * 2);
            console.log(`idx2: ${randomSenderIdx}`)

            if (senders[randomSenderIdx] !== fewestSentTexts) {
                randomSenderIdx = Math.round(Math.random() * 2);
                console.log(`idx3: ${randomSenderIdx}`)

                if (senders[randomSenderIdx] !== fewestSentTexts) {
                    randomSenderIdx = Math.round(Math.random() * 2);
                    console.log(`idx3: ${randomSenderIdx}`)
                }
            }
        }
        
        if (randomSenderIdx === 0) {
            setSentTexts0(sentTexts0 => sentTexts0 + 1)
        } else if (randomSenderIdx === 1) {
            setSentTexts1(sentTexts1 => sentTexts1 + 1)
        } else {
            setSentTexts2(sentTexts2 => sentTexts2 + 1)
        }

        
        if (sentTexts0 < fewestSentTexts) {
            setFewestSentTexts(sentTexts0);
        } else if (sentTexts1 < fewestSentTexts) {
            setFewestSentTexts(sentTexts1);
        } else {
            setFewestSentTexts(sentTexts2);
        }

        console.log(sentTexts0, sentTexts1, sentTexts2)
        console.log(fewestSentTexts)

        // console.log(`Idx: ${randomSenderIdx} val: ${senders[randomSenderIdx]}`)


        let randomSenderName = otherTeamNames[randomSenderIdx];
        let randomSenderImgURL = otherTeamURL[randomSenderIdx];

        for (let i = 0; i < randomWhiteSpaces; i++) {
            msg += invisibleText;
        }
        
        const d = new Date();
        const minuteStamp = d.getMinutes();
        const hourStamp = d.getHours();
        const strMinuteStamp = minuteStamp < 10 ? `0${minuteStamp}` : `${minuteStamp}`;
        const strHourStamp = hourStamp < 10 ? `0${hourStamp}` : `${hourStamp}`;

        const objToPush = {message: msg, sender: randomSenderName, imgURL: randomSenderImgURL, timeStamp: `${strHourStamp}:${strMinuteStamp}`};
        
        tempArray.push(objToPush);

        setOtherChats(tempArray);
    }

    useEffect(() => {
        otherChats.forEach(_message => {
            const messageElement = document.createElement('div');
            const rowElement = document.createElement('div');
            const colElement = document.createElement('div');
            const imgElementOther = document.createElement('img');

            imgElementOther.src = _message.imgURL;
            imgElementOther.className = 'img-element-other';
            rowElement.className = 'row';
            colElement.className = 'col';
            messageElement.innerText = _message.message;
            messageElement.className = 'otherTeamsMessages';
            colElement.append(imgElementOther);
            colElement.append(messageElement)
            rowElement.append(colElement)
            
            // OBS OBS, detta är en så jävla ful lösning, lär dig hur arv funkar mellan komponenter
            if (messageElement.innerText !== 'undefined') {
                
                document.getElementById('chatTextOther').append(rowElement);

                const objDiv = document.getElementById("chatTextOther");
                objDiv.scrollTop = objDiv.scrollHeight;
            }
            
        })     
    }, [otherChats]) // När otherChats uppdateras ska hela denna komponent uppdateras

    return (
        <div className="chatBox" id="secretChat">
            <Row>
                <Col>      
                    <div id="userinfo">
                        <b>Motståndarlaget:</b><br/> 
                        <img src={'https://i.imgur.com/IBlrCCT.jpg'} alt="" /> Axel Hagel
                        <img src={'https://i.imgur.com/wBeQrMt.jpg'} alt="" /> Elin Rudling
                        <img src={'https://i.imgur.com/GRSyGWE.jpg'} alt="" /> Niklas Löwbeer
                    </div>   
                </Col>
            </Row>

            <Row>
                <Col>    
                    <div id="chatTextOther">
                        <Timer
                            otherChats = {otherChats}
                            handleChange ={handleChange}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default OtherTeam;