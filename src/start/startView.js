import React from 'react';
import {Link, Redirect, Route, useHistory} from 'react-router-dom';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import ChatComponent from '../chat/chatView.js';

const firebase = require('firebase');

//import * as ROUTES from '../constants/routes.js';
//^won't be needed


function StartView({email, setEmail, password, setPassword, loginError, setLoginError}) {
    const history = useHistory();

    return (
        <Container className="startContainer">
        <Row>
            <Col>
                <img src={require('../headerTextCards.png')}  alt="THE CARD GAME" id="headerimg"></img>
            </Col>
        </Row>
        <Row>
            <Col>
                <div id="text">
                    Välkommen till The Card Game! Här är reglerna: Lorem ipsum dolor sit amet, no consequat assueverit honestatis vix. Nam an error mundi veritus, quem tractatos at sea. Eos cu soleat graece. Volumus repudiandae pri eu, ad usu veniam propriae assueverit. Mundi primis aperiam an eam, facete omittantur eum at. Eligendi dissentiet concludaturque ne nec, nam et nisl ornatus voluptatibus, ea prompta fabulas pri.
                </div>  
            </Col>
        </Row>
        <Row>
            
        <Col  md={3}></Col>
            <Col md={6}>      
                <div className="loginBox">
                    <Form onSubmit= {e => {
                        e.preventDefault();
                        
                        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                            history.push('/chat');
                        
                        }, error => {
                            setLoginError('Server error');
                            console.log(error)
                        });
                    }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control type="email" autoFocus placeholder="Enter email" onChange={e => {
                                setEmail(e.target.value);
                            }}

                            />
                            <Form.Text className="text-muted">
                            Använd samma mejl som du kommunicerat med oss med
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="text" placeholder="Password" onChange={setPassword}/>
                        </Form.Group>
                        <Button type="submit">
                            Logga in
                        </Button>
                    </Form>
                </div>
            </Col>
            <Col  md={3}></Col>

      </Row>
    </Container>
    );
  }

export default StartView;