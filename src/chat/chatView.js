import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import Popup from "reactjs-popup";

import TimerReady from './TimerReady';

import './chatview.css';
import './chat1.css';
import './chat2.css';

import OtherTeamView from './otherTeamView';
import reglerShort from './spelreglerS';
import reglerLong from './spelreglerL';
import GameTimer from '../GameTimer/GameTimer';


const firebase = require('firebase');

function ChatView({email, resultHandler}) {
    const history = useHistory();
    const [chats, setChats] = useState([]);
    const [name, setName] = useState('');
    const [imgURL, setImgURL] = useState('');
    const [askIfReady, setAskIfReady] = useState(true);
    const [otherPersons, setotherPersons] = useState(['','','']);
    const [firstMailInChat, setFirstMailInChat] = useState('');
    const [currentUsers, setCurrentUsers] = useState('');
    const [usersVoted, setUsersVoted] = useState([]);
    const [teamReady, setTeamReady] = useState(false);
    const [seconds, setSeconds] = useState(600);
    const [loggedInUsers, setLoggedInUsers] = useState([]);
    const [user1Online, setUser1Online] = useState('');
    const [user2Online, setUser2Online] = useState('');
    const [user3Online, setUser3Online] = useState('');
    const [startTimer, setStartTimer] = useState(false);

    const anonymousMode = true;
    const prankMode = false;

    

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
                            setChats(chats),
                            
                            chats[0].users.forEach((userEmail, index, array) => {
                                firebase
                                    .firestore()
                                    .collection('users')
                                    .doc(userEmail)
                                    .onSnapshot(function(doc) {
                                        setotherPersons(oldArray => {
                                            let tempArr = [...oldArray];
                                            tempArr[index] = {
                                                name: doc.data().name,
                                                imgURL: doc.data().imgURL,
                                                mail: userEmail
                                            };
                                            return tempArr;
                                        })
                                    })
                            }),
                            setCurrentUsers(setCurrentUsersHandler(chats[0].users)),
                            setTeamReady(chats[0].teamReady)
                        )
                    })
            }
        })
        
        firebase
            .firestore() 
            .collection('chats') 
            .where('users', 'array-contains', email)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    let _loggedInUsers = [...doc.data().usersLoggedIn];

                    if (!_loggedInUsers.includes(email)) {
                        _loggedInUsers.push(email)
                    }
                    let chatId = doc.id;

                    setLoggedInUsers(_loggedInUsers)

                    firebase 
                        .firestore() 
                        .collection('chats') 
                        .doc(chatId)
                        .update({
                            usersLoggedIn: _loggedInUsers,
                        })
                })
            })
        
        firebase
            .firestore()
            .collection('users')
            .doc(email)
            .onSnapshot(function(doc) {
                setName(doc.data().name)
                setImgURL(doc.data().imgURL)
            })
    }, []);

    function increaseTimeHandler(newTime) {
        setSeconds(newTime)
    }

    function setCurrentUsersHandler(usersMailArray) {
        let currentUsersString = '';

        usersMailArray.forEach((userEmail, index, array) => {
            if (index !== array.length - 1) { 
                currentUsersString += userEmail + ":"; 
            } else {
                currentUsersString += userEmail;
            }
        })

        return currentUsersString;
    }

    function firstMailInChatHandler(_firstMailInChat) {
        setFirstMailInChat(_firstMailInChat)
    }

    function setUsersVotedHandler(usersVotedArray) {
        setUsersVoted(usersVotedArray)
    }

    function setTeamReadyHandler(usersReadyBool) {
        setTeamReady(usersReadyBool)
    }

    function lockChatHandler() {
        document.getElementById('msg-box').disabled = true;
        const chatRef = firebase.firestore().collection('chats').doc(currentUsers);
        alert('Nu har ni en minut på er att välja kort!')
        chatRef.update({
            teamReady: true
        })
    }

    function chooseCardAlert() {
        alert('Nu måste du välja kort!!!')
    }

    let myTeamUsers = [];

    if (anonymousMode) {
        myTeamUsers = [
            {
                rName: otherPersons[0].name,
                name: 'Anonym Räv',
                imgURL: 'https://i.imgur.com/Uk0fWiL.jpg',
                mail: otherPersons[0].mail
            },
            {
                rName: otherPersons[1].name,
                name: 'Anonym Elefant',
                imgURL: 'https://i.imgur.com/DG31vdf.jpg',
                mail: otherPersons[1].mail
            },
            {
                rName: otherPersons[2].name,
                name: 'Anonym Koala',
                imgURL: 'https://i.imgur.com/VvUs6sM.jpg',
                mail: otherPersons[2].mail
            },
            // En fjärde???
        ]
    } else if (prankMode) {
        myTeamUsers = [
            {
                rName: otherPersons[0].name,
                name: 'My Sjögren',
                imgURL: 'https://i.imgur.com/N8uazyK.jpg',
                mail: otherPersons[0].mail
            },
            {
                rName: otherPersons[1].name,
                name: 'Kevin Ström',
                imgURL: 'https://i.imgur.com/6zqOXhR.jpg',
                mail: otherPersons[1].mail
            },
            {
                rName: otherPersons[2].name,
                name: 'Martin Berglund',
                imgURL: 'https://i.imgur.com/l7sJZwW.jpg',
                mail: otherPersons[2].mail
            },
            // En fjärde???
        ]
    } else {
        myTeamUsers = [
            {
                rName: otherPersons[0].name,
                name: otherPersons[0].name,
                imgURL: otherPersons[0].imgURL,
                mail: otherPersons[0].mail
            },
            {
                rName: otherPersons[1].name,
                name: otherPersons[1].name,
                imgURL: otherPersons[1].imgURL,
                mail: otherPersons[1].mail
            },
            {
                rName: otherPersons[2].name,
                name: otherPersons[2].name,
                imgURL: otherPersons[2].imgURL,
                mail: otherPersons[2].mail
            },
            // En fjärde???
        ]
    }
    
    const myIndex = myTeamUsers.findIndex(userObject => {
        return userObject.rName === name
    })

    useEffect(() => {
        if (currentUsers !== '') {
            chats.filter((_chat, _index) => {
                let bool = false;
        
                _chat.users.forEach(user => {
                    if (user === email) {
                        bool = true;
                    }
                })
        
                return bool;
            }).forEach((_chat, _index) => {
                document.getElementById('chatMessages').innerHTML = "";
                
                setTeamReadyHandler(_chat.teamReady)
                setUsersVotedHandler(_chat.usersVoted);
                setLoggedInUsers(_chat.usersLoggedIn)
        
                const chatRef = firebase.firestore().collection('chats').doc(currentUsers);
                
                if (loggedInUsers.length === 3) {
                    console.log('asd')
                    setStartTimer(true);
                }

                // --- Visa inloggade användare ---
                console.log(`loggedInUsers: ${loggedInUsers}`)
                if (loggedInUsers.includes(myTeamUsers[0].mail)) {
                    setUser1Online('🌐');
                } 
                
                if (loggedInUsers.includes(myTeamUsers[1].mail)) {
                    setUser2Online('🌐');
                }
                
                if (loggedInUsers.includes(myTeamUsers[2].mail)) {
                    setUser3Online('🌐');
                }
                
                // --- Visa valda kort ---
                if (teamReady) {
                    setTimeout(() => {
                        
                        const chosenRed = _chat.chosenRedCard;
                        const chosenBlue = _chat.chosenBlueCard;
                        const tempCardsContainer = document.createElement('div');
        
                        for (let r = 0; r < chosenRed; r++) {
                            const redCardElement = document.createElement('img');
                            redCardElement.src = require('../red_card.png');
                            redCardElement.className = 'choicesCard';
                            tempCardsContainer.append(redCardElement)
                        }
                        
                        for (let b = 0; b < chosenBlue; b++) {
                            const blueCardElement = document.createElement('img');
                            blueCardElement.src = require('../blue_card.png');
                            blueCardElement.className = 'choicesCard';
                            tempCardsContainer.append(blueCardElement)
                        }
        
                        const chosenCardContainer = document.getElementById('chosenCardContainer');
        
                        if (chosenCardContainer !== null) {
                            chosenCardContainer.innerHTML = '';
                            chosenCardContainer.append(tempCardsContainer);
                        }
                    }, 50)
                }
                // -----------------------
        
                if (_chat.chosenBlueCard + _chat.chosenRedCard === 3) {
                    const finalCard = _chat.chosenRedCard >= 2 ? 'redCard' : 'blueCard';
                    const otherTeamCard = _chat.otherTeamFinalCard;
                    let myPoints = -1;
                    let othersPoints = -1;
        
                    if (finalCard === 'redCard' && otherTeamCard === 'redCard') {
                        myPoints = 0;
                        othersPoints = 0;
                    } else if (finalCard === 'redCard' && otherTeamCard === 'blueCard') {
                        myPoints = 100;
                        othersPoints = 0;
                    } else if (finalCard === 'blueCard' && otherTeamCard === 'redCard') {
                        myPoints = 0;
                        othersPoints = 100;
                    } else if (finalCard === 'blueCard' && otherTeamCard === 'blueCard') {
                        myPoints = 50;
                        othersPoints = 50;
                    }
        
                    chatRef.update({
                        teamPoints: myPoints,
                        finalCard: finalCard
                    })
        
                    resultHandler(finalCard, otherTeamCard, myPoints, othersPoints)
        
                    history.push('/result')
                }
        
                _chat.messages.forEach(_message => { 
                    const messageElement = document.createElement('div');
                    const rowElement = document.createElement('div');
                    const colElement = document.createElement('div');
                    const imgElement = document.createElement('img');
    
                    if (firstMailInChat === '') {
                        firstMailInChatHandler(currentUsers.split(':')[0])
                    }
                    
                    rowElement.className = 'row';
                    colElement.className = 'col';
                    
                    if (_message.sender === 'Admin') {
                        const ready = _chat.readyToChoose;
                        const notReady = _chat.notReadyToChoose;
                        
                        if (ready + notReady === 3) {
                            if (ready >= 2) {
                                chatRef.update({
                                    teamReady: true
                                })
        
                                setAskIfReady(false);
                            }
        
                            chatRef.update({
                                messages: firebase.firestore.FieldValue.arrayRemove(_message)
                            })
        
                            chatRef.update({
                                readyToChoose: 0,
                                notReadyToChoose: 0
                            })
                        }
        
                        messageElement.className = 'adminMessages';
                        messageElement.innerText = ` ${_message.message}`;
                        const buttonElementYes = document.createElement('button');
                        const buttonElementNo = document.createElement('button');
        
                        buttonElementYes.innerText = 'Ja';
                        buttonElementNo.innerText = 'Nej';
        
                        if (usersVoted.includes(email)) {
                            buttonElementYes.className = 'hide';
                            buttonElementNo.className = 'hide';
                        } else {
                            buttonElementYes.className = '';
                            buttonElementNo.className = '';
                        }
        
                        buttonElementYes.addEventListener("click", () => {
                            buttonElementYes.className = 'hide';
                            buttonElementNo.className = 'hide';
        
                            chatRef.update({
                                readyToChoose: _chat.readyToChoose + 1,
                                usersVoted: firebase.firestore.FieldValue.arrayUnion(email)
                            })
                        });
        
                        buttonElementNo.addEventListener("click", () => {
                            buttonElementYes.className = 'hide';
                            buttonElementNo.className = 'hide';
        
                            chatRef.update({
                                notReadyToChoose: _chat.notReadyToChoose + 1,
                                usersVoted: firebase.firestore.FieldValue.arrayUnion(email)
                            })
                        });
        
                        messageElement.append(buttonElementYes);
                        messageElement.append(buttonElementNo);
        
                        // Låt dessa motsvara hur många readyToAnswer i databsen
                        // När minst två är gröna så ska välj-kort-rutan visas
        
                        for (let i = 0; i < ready; i++) {
                            messageElement.append('✔️');
                        }
        
                        for (let i = 0; i < notReady; i++) {
                            messageElement.append('❌');
                        }
                        
                        colElement.append(messageElement);
                        rowElement.append(colElement);
                    } else if (_message.sender === name) { // the users own messges
                        
                        const messageContainer = document.createElement('div');
                        const nameTimeContainer =  document.createElement('div');
                        
                        if (anonymousMode && myTeamUsers[myIndex] !== undefined) {
                            imgElement.src = myTeamUsers[myIndex].imgURL;
                            nameTimeContainer.innerText =  `${_message.timestamp} ${myTeamUsers[myIndex].name}`; 
                        } else {
                            nameTimeContainer.innerText =  `${_message.timestamp} ${_message.sender}`;
                            imgElement.src = _message.senderImgURL;
                        }
                        
                        messageElement.innerText = ` ${_message.message}`;
                        messageContainer.append(nameTimeContainer)
                        messageContainer.append(messageElement);
                        messageContainer.append(imgElement);
        
                        messageContainer.className = 'myMessagesBox'
                        messageElement.className = 'myMessages';
                        nameTimeContainer.className = 'nameTimeTag';
                        colElement.append(messageContainer)
                        rowElement.append(colElement)
                    } else { // messages from other people in chat 1
                        const messageContainer = document.createElement('div');
                        const nameTimeContainer =  document.createElement('div');
                        let textMessage = _message.message;
        
                        // --------------------------
                        // --- FAKE:A MEDDELANDEN ---
                        // console.log(textMessage.toUpperCase(), 1)
                        // console.log(myTeamUsers[1].name.split(" ")[0].toUpperCase(), 2)
                        // console.log('')
                        if (prankMode) {
                            if (name === myTeamUsers[0].rName) {
                                let searchMask = myTeamUsers[0].name.split(" ")[0];
                                let regEx = new RegExp(searchMask, "ig");
                                let replaceMask = myTeamUsers[0].rName.split(" ")[0];
                                
                                textMessage = textMessage.replace(regEx, replaceMask);
        
                                if (_message.sender === myTeamUsers[1].rName) {
                                    let searchMask = myTeamUsers[1].rName.split(" ")[0];
                                    let regEx = new RegExp(searchMask, "ig");
                                    let replaceMask = myTeamUsers[1].name.split(" ")[0];
                                    
                                    textMessage = textMessage.replace(regEx, replaceMask);
                                } else if (_message.sender === myTeamUsers[2].rName) {
                                    let searchMask = myTeamUsers[2].rName.split(" ")[0];
                                    let regEx = new RegExp(searchMask, "ig");
                                    let replaceMask = myTeamUsers[2].name.split(" ")[0];
                                    
                                    textMessage = textMessage.replace(regEx, replaceMask);
                                }
        
                            } else if (name === myTeamUsers[1].rName) {
                                let searchMask = myTeamUsers[1].name.split(" ")[0];
                                let regEx = new RegExp(searchMask, "ig");
                                let replaceMask = myTeamUsers[1].rName.split(" ")[0];
                                
                                textMessage = textMessage.replace(regEx, replaceMask);
                                
                                
                                if (_message.sender === myTeamUsers[0].rName) {
                                    let searchMask = myTeamUsers[0].rName.split(" ")[0];
                                    let regEx = new RegExp(searchMask, "ig");
                                    let replaceMask = myTeamUsers[0].name.split(" ")[0];
                                    
                                    textMessage = textMessage.replace(regEx, replaceMask);
                                } else if (_message.sender === myTeamUsers[2].rName) {
                                    let searchMask = myTeamUsers[2].rName.split(" ")[0];
                                    let regEx = new RegExp(searchMask, "ig");
                                    let replaceMask = myTeamUsers[2].name.split(" ")[0];
                                    
                                    textMessage = textMessage.replace(regEx, replaceMask);
                                }
                            } else if (name === myTeamUsers[2].rName) {
                                let searchMask = myTeamUsers[2].name.split(" ")[0];
                                let regEx = new RegExp(searchMask, "ig");
                                let replaceMask = myTeamUsers[2].rName.split(" ")[0];
                                
                                textMessage = textMessage.replace(regEx, replaceMask);
        
                                if (_message.sender === myTeamUsers[0].rName) {
                                    let searchMask = myTeamUsers[0].rName.split(" ")[0];
                                    let regEx = new RegExp(searchMask, "ig");
                                    let replaceMask = myTeamUsers[0].name.split(" ")[0];
                                    
                                    textMessage = textMessage.replace(regEx, replaceMask);
                                } else if (_message.sender === myTeamUsers[1].rName) {
                                    let searchMask = myTeamUsers[1].rName.split(" ")[0];
                                    let regEx = new RegExp(searchMask, "ig");
                                    let replaceMask = myTeamUsers[1].name.split(" ")[0];
                                    
                                    textMessage = textMessage.replace(regEx, replaceMask);
                                }
                            }
                        }
    
                        if (prankMode || anonymousMode) {
                            if (myTeamUsers[0].rName === _message.sender) {
                                imgElement.src = myTeamUsers[0].imgURL;
                                nameTimeContainer.innerText = `${_message.timestamp} ${myTeamUsers[0].name}`;
                            } else if (myTeamUsers[1].rName === _message.sender) {
                                imgElement.src = myTeamUsers[1].imgURL;
                                nameTimeContainer.innerText = `${_message.timestamp} ${myTeamUsers[1].name}`;
                            } else if (myTeamUsers[2].rName === _message.sender) {
                                imgElement.src = myTeamUsers[2].imgURL;
                                nameTimeContainer.innerText = `${_message.timestamp} ${myTeamUsers[2].name}`;
                            }
                        } else {
                            imgElement.src = _message.senderImgURL;
                            nameTimeContainer.innerText = `${_message.timestamp} ${_message.sender}`;
                        }
                                             
                        messageElement.innerText = textMessage;
        
                        messageContainer.append(nameTimeContainer);
                        messageContainer.append(imgElement);
        
                        messageContainer.append(messageElement);
                        
        
                        messageContainer.className = 'otherMessagesBox'
                        messageElement.className = 'otherMessages';
                        nameTimeContainer.className = 'nameTimeTag';
                        colElement.append(messageContainer)
                        rowElement.append(colElement)
                        
                    }     
        
                    document.getElementById('chatMessages').append(rowElement);
                })
        
                const objDiv = document.getElementById("chatMessages");
                objDiv.scrollTop = objDiv.scrollHeight;  
            })
        }
    }, [chats, name, imgURL, askIfReady, otherPersons, firstMailInChat, currentUsers, usersVoted, teamReady, loggedInUsers])

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

    const chooseRedCard = () => {
        document.getElementById('redCardChooser').className = 'hide';
        document.getElementById('blueCardChooser').className = 'hide';
        const dbRef = firebase.firestore().collection('chats').doc(currentUsers)
        let increment = firebase.firestore.FieldValue.increment(1);
        
        dbRef.update({
            chosenRedCard: increment
        })
    }

    const chooseBlueCard = () => {
        document.getElementById('redCardChooser').className = 'hide';
        document.getElementById('blueCardChooser').className = 'hide';
        
        const dbRef = firebase.firestore().collection('chats').doc(currentUsers)
        let increment = firebase.firestore.FieldValue.increment(1);
        
        dbRef.update({
            chosenBlueCard: increment
        })
    }

    /* POP UP CONTENT: */
    let popupcontent = (
        <div className="popContent">  
            <div id="header"> SPELGRELER </div>
            {reglerLong}
        </div>
    );

    // ---

    let timerContent = null;
    if (email === firstMailInChat && askIfReady) {
        timerContent = (
            <TimerReady currentUsers={currentUsers} />
        )
    }

    let voteBoxContent = null;

    if (teamReady) {
        voteBoxContent = (
            <div id='voteBox'>
                <Row>
                    <Col>
                        <h5>VÄLJ KORT HÄR</h5> 
                        
                        Se till att vara överrens i gruppen innan valet görs.
                        Ni väljer kort som ett lag.
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="inline-block" id='redCardChooser'>
                            <div onClick={chooseRedCard}>
                                <img src={require('../red_card.png')}/>
                                <h6 className="inline-block">RÖTT KORT</h6>
                            </div>
                        </div>

                        <div className="inline-block" id='blueCardChooser'>
                            <div onClick={chooseBlueCard}>
                                <img src={require('../blue_card.png')}/>
                                <h6 className="inline-block">BLÅTT KORT</h6>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className='choicesText'>Era val: </p>
                        <div id='chosenCardContainer'>

                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        <Container className="chatContainer" fluid>
            {/* HEADER   lägg till fluid={true} här uppe om chatterna ska fylla hela skärmen */}
            <Row>
                <Col>
                    <img src={require('../headerImage.png')}  alt="THE CARD GAME" id="headerimg"></img>
                </Col>
            </Row> 
            <Row>

                <Col>
                    <div id="text">
                        {reglerShort}

                        <GameTimer 
                            seconds={seconds} 
                            increaseTimeHandler={increaseTimeHandler} 
                            lockChatHandler={lockChatHandler} 
                            chooseCardAlert={chooseCardAlert}
                            startTimer={startTimer} />
                    </div>  
                </Col>
            </Row>

            <Row > {/* ROW FOR THE CHAT WINDOWS */}
                <Col sm={12} lg={6} >  {/* ACTIVE CHAT */}
                    <div className="chatBox">
                        <Row>
                            <Col md={4}>      
                                <div id="userinfo">
                                    <b>Inloggad som:</b><br/> 
                                    {
                                        anonymousMode && myTeamUsers[myIndex] !== undefined ?
                                            <div>
                                                <img src={myTeamUsers[myIndex].imgURL} /> {myTeamUsers[myIndex].name}
                                                <img src={require('../bilder/onlineDot.png')}/>
                                            </div>
                                        :
                                            <div>
                                                <img src={imgURL} alt="" /> {name}🌐
                                            </div>
                                    }
                                    
                                </div>  
                            </Col>

                            <Col md={8}>
                                <div id="userinfo">
                                    <b>Lagmedlemmar</b><br/> 

                                    {
                                        name !== myTeamUsers[0].rName ? 
                                            <div className='teamMates'>
                                                <img src={myTeamUsers[0].imgURL} alt="" /> {myTeamUsers[0].name} {user1Online}
                                            </div>
                                        : null
                                    }
                                    {
                                        name !== myTeamUsers[1].rName ? 
                                            <div className='teamMates'>
                                                <img src={myTeamUsers[1].imgURL} alt="" /> {myTeamUsers[1].name} {user2Online}
                                            </div>
                                        : null
                                    }
                                    {
                                        name !== myTeamUsers[2].rName ? 
                                            <div className='teamMates'>
                                                <img src={myTeamUsers[2].imgURL} alt="" /> {myTeamUsers[2].name} {user3Online}
                                            </div>
                                        : null
                                    }
                                    
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                {timerContent}

                                <div id="chatMessages">
                                    
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>    
                                <div id="submitRow">
                                    <Form onSubmit={submitMessage}>
                                        <Row>
                                            <Col>    
                                                <Form.Row >
                                                    <Form.Control 
                                                        bsPrefix="send_text" 
                                                        type="text" 
                                                        id="msg-box" 
                                                        autoFocus 
                                                    />
                                                    
                                                    <Button  
                                                        bsPrefix="send_button" 
                                                        type="submit" 
                                                    >
                                                            SKICKA
                                                    </Button>
                                                </Form.Row>
                                            </Col>
                                        </Row>
                                        
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col sm={12} lg={6}> {/* 2ND CHAT */}
                    <OtherTeamView anonymousMode={anonymousMode} />

                    {voteBoxContent}
                </Col>
            </Row>

            <Row>
                <Col>    
                    <div id="bottomRow">
                        <div id="regler">
                            {/* POP-UP WINDOW FÖR SPELREGLER */}
                            <Popup trigger={<div>Spelregler</div>} modal>
                                {popupcontent}
                            </Popup>
                        </div>
                        <div id="logout">
                            <Link to="/thecardgame">Logga ut</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
  }

export default ChatView;


