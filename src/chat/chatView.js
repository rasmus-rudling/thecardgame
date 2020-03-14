import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button, FormControl, InputGroup, Form} from 'react-bootstrap';


//import * as ROUTES from '../constants/routes.js';
//^won't be needed

function ChatView({email, myMessages, otherMessages, otherTeamsMessages, adminMessage, displayText}) {
 
  var image = "https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg";

  if(email==="rrudling@kth.se" || email==="Rrudling@kth.se"){
    var image = "https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-9/68780115_10218157623043647_869986299145093120_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=mwN7yisOxXQAX8Pe3nH&_nc_ht=scontent-arn2-2.xx&oh=adb96402da673a7884160afacee987f7&oe=5E957F7B";
    var name = " Rasmus Rudling";
  }else if(email==="simfors@kth.se" || email==="Simfors@kth.se"){
    var image = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/s960x960/62459332_10211557969345271_2008241031601979392_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=srJZq4IbFGsAX-Dbd-q&_nc_ht=scontent-arn2-1.xx&_nc_tp=7&oh=dcd920d469e8c96a356ab28a35eadfae&oe=5E95855E";
    var name = " Johanna Simfors";
  }else{
    var image = "https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg";
  }
  
  const [messagesObserver, setMessagesObserver] = React.useState(myMessages);
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

                      {myMessages.map((object) => {
                        return (<Row>
                          <Col>
                            <div id="myMessagesBox">
                              <div class="nameTimeTag">{object.name} {object.time}</div>
                              
                                <div id="myMessages">{object.message}</div>
                                
                                <img src={object.image}/>
                            </div>
                          </Col>
                        </Row>)
                        })}

                      {otherMessages.map((object) => {
                        return (<Row>
                          <Col>

                          <div id="otherMessagesBox">
                                {object.name} {object.time}<br />
                                <div id="otherMessages">{object.message}</div>
                                <img src={object.image}/>
                            </div>
                          </Col>
                        </Row>)
                        })}

                        <Row>
                          <Col>
                            <div id="adminMessage">Är ni redo att välja kort? <b><u>Klicka här</u></b> - Fortsätt annars att diskutera</div>
                          </Col>
                        </Row>
                        
                    </div>
                  </div>
              </Col>
          </Row>

          <Row>
            <Col>
            
          <Form>
              <Form.Row >
                      <Form.Control  bsPrefix="send_text" type="text" autoFocus />
                      <Button  bsPrefix="send_button" type="submit" >
                        SEND
                      {/*<img src={"https://cdn1.iconfinder.com/data/icons/mail-2-basic/512/45-Send-512.png"}/>*/}
                      </Button>
                 
              </Form.Row>
              </Form>
              </Col>
          </Row>
          </div>
        </Col>

  
        <Col sm={12} lg={6}> {/* 2ND CHAT */}
        <div className="chatBox" id="secretChat">
          <Row md={4}>
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
                    <div id="chatText" id="secretChat">
                      {/*<p className="animate" id="animation">Diskussion pågår. . . </p>*/}
                      {otherTeamsMessages.map((value) => {
                        return (<Row>
                          <Col>
                            <div id="otherTeamsMessages">{value}</div>
                          </Col>
                        </Row>)
                        })}                      
                    </div>
                  </div>
              </Col>
            </Row>
        </div>
          {/* END OF SECRET CHAT */}


              <div id="voteBox">
                <Row>
                  <Col>
                    <h5>VÄLJ KORT HÄR</h5> Se till att vara överrens i gruppen innan valet görs.
                      Ni väljer kort som ett lag.
                  </Col>
                </Row>

                  <Row>
                      <Col>
                        <div class="inline-block" ><img src={require('../red_card.png')}/><h6 class="inline-block">RÖTT KORT</h6></div>
                        <div class="inline-block" ><img src={require('../blue_card.png')}/><h6 class="inline-block">BLÅTT KORT</h6></div>
                      </Col>
                  </Row>
              </div>

      
      </Col>
        
    </Row>


    <Row>
        <Col> 
            <div id="logout"><u>Spelregler</u><Link to="/">Log out</Link></div>
        </Col>
{/*
        <Col md={{span:4, offset:1}}>
            <audio src={require("./music.mp3")} controls autoPlay/>
            <audio src={require("./music.mp3")} autoPlay/>
          </Col>
          */}
    </Row>

    </Container>
    );
  }

export default ChatView;


