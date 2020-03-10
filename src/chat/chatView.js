import React, { useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Container, Row, Col, Button, Form, InputGroup} from 'react-bootstrap';

const firebase = require('firebase');

//import * as ROUTES from '../constants/routes.js';
//^won't be needed

function ChatView({email}) {
    const history = useHistory();
    const [emailLokal, setEmailLokal] = React.useState("");
    const [chats, setChats] = React.useState([]);
    console.log(email)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async _usr => {
            if (!_usr) {
                history.push('/');
            } else {
                await firebase
                    .firestore()
                    .collection('chats')
                    .where('users', 'array-contains', _usr.email)
                    .onSnapshot(async res => {
                        const chats = res.docs.map(_doc => _doc.data());
                        await (
                            setEmailLokal(_usr.email),
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
            console.log(user)
            console.log(email)
            if (user === email) {
                console.log("nu")
                bool = true;
            }
        })

        return bool;
    }).forEach((_chat, _index) => {

        document.getElementById('chatText').innerHTML = "";

        _chat.messages.forEach((_message) => {            
            const messageElement = document.createElement('div');
            messageElement.innerText = `${_message.sender}: ${_message.message}`

            document.getElementById('chatText').append(messageElement);
        })

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

    if(email==="Rasmus" || email==="rasmus"  || email==="rrudling@kth.se" || email==="rrudling@gmail.com") {
        var image = "https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-9/68780115_10218157623043647_869986299145093120_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=mwN7yisOxXQAX8Pe3nH&_nc_ht=scontent-arn2-2.xx&oh=adb96402da673a7884160afacee987f7&oe=5E957F7B";
        var name = " Rasmus Rudling";
    } else if(email==="Johanna" || email==="johanna" || email==="simfors@kth.se") {
        var image = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/s960x960/62459332_10211557969345271_2008241031601979392_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=srJZq4IbFGsAX-Dbd-q&_nc_ht=scontent-arn2-1.xx&_nc_tp=7&oh=dcd920d469e8c96a356ab28a35eadfae&oe=5E95855E";
        var name = " Johanna Simfors";
    } else {
        var image = "https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg";
    }
  
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
                    <div id="textRow">
                        <div id="chatText">
                        </div>
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

                                const objDiv = document.getElementById("chatText");
                                objDiv.scrollTop = objDiv.scrollHeight + 200;
                            }}>
                                <Form.Control type="text" id='msg-box' autoFocus />

                                <Button type="submit">
                                    Skicka
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>

  
        <Col sm={12} lg={6}> {/* 2ND CHAT */}
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
                  <div id="textRow">
                    <div id="chatText">
                      <p className="animate" id="animation">Diskussion pågår. . . </p>
                    </div>
                  </div>
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


