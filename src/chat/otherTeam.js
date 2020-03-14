import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import Timer from './Timer';

const firebase = require('firebase');

function OtherTeam () {
    const [otherChats, setOtherChats] = useState([]);
    const invisibleText = '　';
    const otherTeamNames = ['Kristina', 'Anna', 'Robert'];

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
    
    const handleChange = (...otherChats) => {

        let tempArray = otherChats;
        let msg = "";
        let randomWhiteSpaces = Math.round(randn_bm(2, 35, 2));

        let randomSender = Math.round(Math.random() * (otherTeamNames.length - 1));
        for (let i = 0; i < randomWhiteSpaces; i++) {
            msg += invisibleText;
        }
        
        const objToPush = {message: msg, sender: otherTeamNames[randomSender]}

        // firebase
        //     .firestore()
        //     .collection('chats')
        //     .doc(otherTeamNames)
        //     .update({
        //         messages: firebase.firestore.FieldValue.arrayUnion({
        //             sender: name,
        //             message: newMessage,
        //             timestamp: `${strHourStamp}:${strMinuteStamp}`,
        //             senderImgURL: imgURL
        //         })
        //     })

        tempArray.push(objToPush)

        setOtherChats(tempArray)
    }

    useEffect(() => {
        otherChats.forEach(_message => {
            const messageElement = document.createElement('div');
            const rowElement = document.createElement('div');
            const colElement = document.createElement('div');
            const imgElementOther = document.createElement('img');

            imgElementOther.src = 'https://images.squarespace-cdn.com/content/v1/5589a812e4b0248058743f7e/1562001389112-WFLCO7JEU2GDDM9ANYXT/ke17ZwdGBToddI8pDm48kMh3mVmBaCAeGwqCLG3iONRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PITeQtWPcxF65ANawkK25DREOmFck9peR6QL8AnpRiPJE/LAURA+PROFILE+CIRCLE+NEW.png'//_message.senderImgURL
            imgElementOther.className = 'img-element-other'
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
                        <img src={"https://res.cloudinary.com/inbound-org/image/twitter/w_200/189315459.jpg"} alt="" /> Sven Svensson
                        <img src={"https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/production/user_108/renauddavies_2704201773733.jpg"} alt="" /> John Doe
                        <img src={"https://images.squarespace-cdn.com/content/v1/54bbd50ce4b05e8a36418abc/1533226867020-NALD4HA8GBL3IUIQE9PM/ke17ZwdGBToddI8pDm48kMh3mVmBaCAeGwqCLG3iONRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PITeQtWPcxF65ANawkK25DREOmFck9peR6QL8AnpRiPJE/rachel-rouhana-profile-picture-circle.png"} alt="" /> Mary Moe
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