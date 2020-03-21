import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import Timer from './Timer';


function OtherTeamView () {
    const [otherChats, setOtherChats] = useState([]);
    const [sentTexts0, setSentTexts0] = useState(0);
    const [sentTexts1, setSentTexts1] = useState(0);
    const [sentTexts2, setSentTexts2] = useState(0);
    const [fewestSentTexts, setFewestSentTexts] = useState(sentTexts0);

    const senders = [sentTexts0, sentTexts1, sentTexts2]

    const invisibleText = '　';

    const otherTeamUsers = [
        {
            name: 'Alexander Öberg',
            imgURL: 'https://i.imgur.com/zQK9g6C.jpg'
        },
        {
            name: 'Anna Gustavsson',
            imgURL: 'https://i.imgur.com/wfIuhfl.jpg'
        },
        {
            name: 'Julia Lindholm',
            imgURL: 'https://i.imgur.com/Fci8yao.jpg'
        },
        {
            name: 'Martin Berglund',
            imgURL: 'https://i.imgur.com/l7sJZwW.jpg'
        }
    ]

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
    
    function handleChange(minSpace, maxSpace, skewSpace, ...otherChats) {
        let tempArray = otherChats;
        let msg = "";
        let randomWhiteSpaces;

        randomWhiteSpaces = Math.round(randn_bm(minSpace, maxSpace, skewSpace));
        
        let randomSenderIdx = Math.round(Math.random() * 2);

        if (senders[randomSenderIdx] !== fewestSentTexts) {
            randomSenderIdx = Math.round(Math.random() * 2);

            if (senders[randomSenderIdx] !== fewestSentTexts) {
                randomSenderIdx = Math.round(Math.random() * 2);

                if (senders[randomSenderIdx] !== fewestSentTexts) {
                    randomSenderIdx = Math.round(Math.random() * 2);
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

        // console.log(`Idx: ${randomSenderIdx} val: ${senders[randomSenderIdx]}`)

        let randomSenderName = otherTeamUsers[randomSenderIdx].name;
        let randomSenderImgURL = otherTeamUsers[randomSenderIdx].imgURL;

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
            const messageContainer = document.createElement('div');
            const messageElement = document.createElement('div');
            const rowElement = document.createElement('div');
            const colElement = document.createElement('div');
            const imgElementOther = document.createElement('img');
            const nameTimeContainer =  document.createElement('div');

            nameTimeContainer.innerText = `${_message.timeStamp} ${_message.sender}` 

            imgElementOther.src = _message.imgURL;
            nameTimeContainer.className = 'nameTimeTag';
            imgElementOther.className = 'img-element-other-team';

            rowElement.className = 'row';
            colElement.className = 'col';

            messageElement.innerText = _message.message;
            messageElement.className = 'otherMessages';
            messageContainer.className = 'otherMessagesBox'

            messageContainer.append(nameTimeContainer);
            messageContainer.append(imgElementOther);
            messageContainer.append(messageElement);

            colElement.append(messageContainer);
            rowElement.append(colElement)
            
            // OBS OBS, detta är en så sjuk ful lösning, lär dig hur arv funkar mellan komponenter
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
                        <img src={otherTeamUsers[0].imgURL} alt="" /> {otherTeamUsers[0].name}
                        <img src={otherTeamUsers[1].imgURL} alt="" /> {otherTeamUsers[1].name}
                        <img src={otherTeamUsers[2].imgURL} alt="" /> {otherTeamUsers[2].name}
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

export default OtherTeamView;