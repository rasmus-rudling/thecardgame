import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import './startView.css'

const firebase = require('firebase');

function StartView({email, setEmail, password, setPassword, loginError, setLoginError}) {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');

    function submitLogin(event) {
        event.preventDefault();
              
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            history.push('/chat');
            
        
        }, error => {
            if (error.message === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
                setErrorMessage('Fel mailadress!');
            } else if (error.message === 'The password is invalid or the user does not have a password.') {
                setErrorMessage('Fel lösenord!')
            } else {
                setErrorMessage(error.message)
            }
            
        });
    }

    return (
        <Container className="startContainer">
            <Row>
                <Col>
                    <img src={require('../headerImage.png')}  alt="THE CARD GAME" id="headerimg"></img>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div id="text">
                    </div>  
                </Col>
            </Row>

            <Row>
                <Col  md={3}></Col>

                <Col md={6}>      
                    <div className="loginBox">
                        <Form onSubmit= {event => submitLogin(event)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address:</Form.Label>

                                <Form.Control
                                    type="email" 
                                    autoFocus 
                                    placeholder="Enter email" 
                                    onChange={event => setEmail(event.target.value)}
                                />

                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password:</Form.Label>

                                <Form.Control 
                                    type="text" 
                                    placeholder="Password" 
                                    onChange = {event => setPassword(event.target.value)}/>
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Label className='redText'>{errorMessage}</Form.Label>
                            </Form.Group>

                            <Form.Group>
                                <Button type="submit">
                                    Sign in
                                </Button>
                            </Form.Group>
                            <Form.Group>
                                <Button type="submit" variant="outline-dark" onClick={() => {setEmail('anna@kth.se'); setPassword('hej123')}}>
                                    No account? Take a look at the page anyway by clicking here!
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
                
                <Col md={3}></Col>
            </Row>
        </Container>
    );
}

export default StartView;