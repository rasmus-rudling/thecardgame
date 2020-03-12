import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import TimerReady from './TimerReady';

import OtherTeam from './otherTeam';

const firebase = require('firebase');

//import * as ROUTES from '../constants/routes.js';
//^won't be needed

function ChatView({email}) {
    const history = useHistory();
    const [chats, setChats] = useState([]);
    
    console.log(`Inloggad som ${email}`)

    if(email==="Rasmus" || email==="rasmus"  || email==="rrudling@kth.se" || email==="rrudling@gmail.com") {
        var image = "https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-9/68780115_10218157623043647_869986299145093120_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=mwN7yisOxXQAX8Pe3nH&_nc_ht=scontent-arn2-2.xx&oh=adb96402da673a7884160afacee987f7&oe=5E957F7B";
        var name = " Rasmus Rudling";
    } else if(email==="Johanna" || email==="johanna" || email==="simfors@kth.se") {
        var image = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/s960x960/62459332_10211557969345271_2008241031601979392_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=srJZq4IbFGsAX-Dbd-q&_nc_ht=scontent-arn2-1.xx&_nc_tp=7&oh=dcd920d469e8c96a356ab28a35eadfae&oe=5E95855E";
        var name = " Johanna Simfors";
    } else {
        var image = "https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg";
    }

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

            rowElement.className = 'row';
            colElement.className = 'col';
            messageElement.innerText = `${_message.sender}: ${_message.message}`;
            messageElement.id = _message.sender === email ? 'myMessages' : 'otherMessages';

            colElement.append(messageElement)
            rowElement.append(colElement)
        
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

    // --------------------

    var image = "https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg";

    
    return (
        <Container className="chatContainer">
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
                                    <img src={image} alt="" /> {name?name:email}
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
                                    <Form onSubmit={e => {
                                        e.preventDefault();
                                        const newMessage = document.getElementById('msg-box').value;
                                        console.log(currentUsers)
                                        firebase
                                            .firestore()
                                            .collection('chats')
                                            .doc(currentUsers)
                                            .update({
                                                messages: firebase.firestore.FieldValue.arrayUnion({
                                                    sender: email,
                                                    message: newMessage,
                                                    timestamp: Date.now()
                                                })
                                            })

                                        document.getElementById('msg-box').value = '';
                                        document.getElementById("msg-box").focus();
                                    }}>

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
                    <OtherTeam />
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


