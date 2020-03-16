import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import TimerReady from './TimerReady';

import OtherTeamView from './otherTeamView';

const firebase = require('firebase');

//import * as ROUTES from '../constants/routes.js';
//^won't be needed

function ChatView({email}) {
    const history = useHistory();
    const [chats, setChats] = useState([]);
    const [name, setName] = useState('');
    const [imgURL, setImgURL] = useState('');

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async _usr => {
            if (!_usr) { // Om användaren INTE finns --> Skicka användaren till startsidan
                history.push('/');
            } else { 
                await firebase // Invänta svar från databseen
                    .firestore() // Firestore är den DB vi använder 
                    .collection('chats') // Hämtar collection 'chats'
                    .where('users', 'array-contains', _usr.email) // Välj de chatter vars användare innehåller den aktuella användaren
                    .onSnapshot(async res => {
                        const chats = res.docs.map(_doc => _doc.data());
                        await (
                            setChats(chats)
                        )
                    })
            }
        })

        firebase
            .firestore()
            .collection('users')
            .doc(email)
            .onSnapshot(function(doc) {
                setName(doc.data().name)
                setImgURL(doc.data().imgURL)
            });
    }, []);
    
    let currentUsers = "";

    chats.filter((_chat, _index) => {
        let bool = false;

        _chat.users.forEach(user => {
            if (user === email) {
                bool = true;
            }
        })

        return bool;
    }).forEach((_chat, _index) => {

        document.getElementById('chatText').innerHTML = "";

        _chat.messages.forEach(_message => { 
            const messageElement = document.createElement('div');
            const rowElement = document.createElement('div');
            const colElement = document.createElement('div');
            const imgElement = document.createElement('img');

            imgElement.src = _message.senderImgURL

            rowElement.className = 'row';
            colElement.className = 'col';
            
            if (_message.sender === 'Admin') {
                messageElement.className = 'adminMessages';
                messageElement.innerText = ` ${_message.message}`;
                colElement.append(messageElement)
                rowElement.append(colElement)
            } else if (_message.sender === name) {
                const messageContainer = document.createElement('div');
                
                messageContainer.innerHTML = `${_message.timestamp} ${_message.sender} <br />` 
                messageElement.innerText = ` ${_message.message}`;
                messageContainer.append(messageElement);
                messageContainer.append(imgElement);

                messageContainer.className = 'myMessagesBox'
                messageElement.className = 'myMessages';
                colElement.append(messageContainer)
                rowElement.append(colElement)
            } else {
                const messageContainer = document.createElement('div');

                messageContainer.innerHTML = `${_message.timestamp} ${_message.sender} <br />` 
                messageElement.innerText = ` ${_message.message}`;
                messageContainer.append(messageElement);
                messageContainer.append(imgElement);

                messageContainer.className = 'otherMessagesBox'
                messageElement.className = 'otherMessages';
                colElement.append(messageContainer)
                rowElement.append(colElement)
            }     

            document.getElementById('chatText').append(rowElement);
        })

        const objDiv = document.getElementById("chatText");
        objDiv.scrollTop = objDiv.scrollHeight;

        _chat.users.forEach((user, index, array) => {
            if (index !== array.length - 1) { 
                currentUsers += user + ":"; 
            } else {
                currentUsers += user
            }
        })
    })

    function submitMessage(event) {
        event.preventDefault();
        const newMessage = document.getElementById('msg-box').value;
        
        const d = new Date();
        const minuteStamp = d.getMinutes();
        const hourStamp = d.getHours();
        const strMinuteStamp = minuteStamp < 10 ? `0${minuteStamp}` : `${minuteStamp}`;
        const strHourStamp = hourStamp < 10 ? `0${hourStamp}` : `${hourStamp}`;

        firebase
            .firestore()
            .collection('chats')
            .doc(currentUsers)
            .update({
                messages: firebase.firestore.FieldValue.arrayUnion({
                    sender: name,
                    message: newMessage,
                    timestamp: `${strHourStamp}:${strMinuteStamp}`,
                    senderImgURL: imgURL
                })
            })

        document.getElementById('msg-box').value = '';
        document.getElementById("msg-box").focus();
    }
    // --------------------

    var image = "https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg";
    
    return (
        <Container className="chatContainer" fluid>
            {/* HEADER   lägg till fluid={true} här uppe om chatterna ska fylla hela skärmen */}
            <Row>
                <Col>
                    <img src={require('../headerTextCards.png')}  alt="THE CARD GAME" id="headerimg"></img>
                </Col>
            </Row> 
      
            <Row > {/* ROW FOR THE CHAT WINDOWS */}
                <Col sm={12} lg={6} >  {/* ACTIVE CHAT */}
                    <div className="chatBox">
                        <Row>
                            <Col md={4}>      
                                <div id="userinfo">
                                    <b>Inloggad som:</b><br/> 
                                    <img src={image} alt="" /> {name}
                                </div>  
                            </Col>

                            <Col md={8}>
                                <div id="userinfo">
                                    <b>Lagmedlemmar</b><br/> 
                                    <img src={"https://www.positivelysplendid.com/wp-content/uploads/2013/09/Circle-Crop-Profile-300x300.png"} alt="" /> Emma Bobsson
                                    <img src={"https://images.squarespace-cdn.com/content/v1/5589a812e4b0248058743f7e/1562001389112-WFLCO7JEU2GDDM9ANYXT/ke17ZwdGBToddI8pDm48kMh3mVmBaCAeGwqCLG3iONRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PITeQtWPcxF65ANawkK25DREOmFck9peR6QL8AnpRiPJE/LAURA+PROFILE+CIRCLE+NEW.png"} alt="" /> Mary Major
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <TimerReady currentUsers = {currentUsers} />
                                <div id="chatText">
                                    
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>    
                                <div id="submitRow">
                                    <Form onSubmit={event => submitMessage(event)}>

                                    <Row>
                                        <Col md={{span:5, offset:4}}>
                                            <Form.Control type="text" id='msg-box' autoFocus />
                                        </Col>
                                        <Col md={{span:2}}>
                                            <Button type="submit">
                                                Skicka
                                            </Button>
                                        </Col>
                                        
                                    </Row>
                                        
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col sm={12} lg={6}> {/* 2ND CHAT */}
                    <OtherTeamView />

                    <div id="voteBox">
                <Row>
                  <Col>
                    <h5>VÄLJ KORT HÄR</h5> Se till att vara överrens i gruppen innan valet görs.
                      Ni väljer kort som ett lag.
                  </Col>
                </Row>

                  <Row>
                      <Col>
                        <div className="inline-block" ><img src={require('../red_card.png')}/><h6 className="inline-block">RÖTT KORT</h6></div>
                        <div className="inline-block" ><img src={require('../blue_card.png')}/><h6 className="inline-block">BLÅTT KORT</h6></div>
                      </Col>
                  </Row>
              </div>

                </Col>


            </Row>

            <Row>
                <Col>    
                    <div id="logout"><u>Spelregler</u><Link to="/">Log out</Link></div>
                </Col>
            </Row>
            
        </Container>
    );
  }

export default ChatView;


