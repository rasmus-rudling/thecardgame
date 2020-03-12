import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import Timer from './Timer';

function OtherTeam () {
    const [otherChats, setOtherChats] = useState([]);
    const invisibleText = '　';
    const otherTeamNames = ['Kristina', 'Anna', 'Robert'];

    const handleChange = (...otherChats) => {

        let tempArray = otherChats;
        let msg = "";
        let randomWhiteSpaces = Math.round(Math.random() * 13) + 4;
        let randomSender = Math.round(Math.random() * (otherTeamNames.length - 1));
        for (let i = 0; i < randomWhiteSpaces; i++) {
            msg += invisibleText;
        }
        
        const objToPush = {message: msg, sender: otherTeamNames[randomSender]}
        tempArray.push(objToPush)

        setOtherChats(tempArray)
    }

    useEffect(() => {
        otherChats.forEach(_message => {
            const messageElement = document.createElement('div');
            const rowElement = document.createElement('div');
            const colElement = document.createElement('div');

            rowElement.className = 'row';
            colElement.className = 'col';
            messageElement.innerText = `${_message.sender}: ${_message.message}`;
            messageElement.id = 'otherTeamsMessages';

            colElement.append(messageElement)
            rowElement.append(colElement)
            
            // OBS OBS, detta är en så jävla ful lösning, lär dig hur arv funkar mellan komponenter
            if (messageElement.innerText !== 'undefined: undefined') {
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