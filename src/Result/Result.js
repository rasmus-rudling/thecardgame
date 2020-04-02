import React, { useEffect, useState } from 'react';
import classes from './result.module.css';
import {Container, Row, Col} from 'react-bootstrap';

const firebase = require('firebase');

const Result = (props) => {
    const redCard = document.createElement('img');
    const blueCard = document.createElement('img');

    redCard.src = require('../red_card.png');
    blueCard.src = require('../blue_card.png');
    
    return (
        <Container fluid className={classes.container}>
            {
                setTimeout(() => {
                    const pElement = document.createElement('p');
                    pElement.innerText = 'Tack för att du deltog i denna deltävling! Om det här är din andra omgång ska du nu gå in och svara på formuläret som du nu fått på mailen!';
                    
                    const headerElement = document.getElementById('header');
                    
                    headerElement.append(pElement);
                }, 1500)
            }
            <Row className={classes.row}>
                <Col md={6} className={classes.myTeam}>
                    <h1 id='header'></h1>
                    <h1>Ert val</h1>
                    {
                        props.finalCard === 'redCard' ? 
                            <img src={require('../red_card.png')} /> 
                            : 
                            <img src={require('../blue_card.png')} />
                    }
                    

                    <p>Ni får <strong className={(props.myPoints === 100 || props.myPoints === 0) ? classes.redText : classes.blueText}>{props.myPoints}</strong> poäng var!</p>
                    
                </Col>

                <Col md={6} className={classes.otherTeam}>
                    <h1>Motståndarlagets val</h1>

                    {
                        props.otherTeamFinalCard === 'redCard' ? 
                            <img src={require('../red_card.png')} /> 
                            : 
                            <img src={require('../blue_card.png')} />
                    }

                    <p>Motståndarlaget får <strong className={(props.myPoints === 100 || props.myPoints === 0) ? classes.redText : classes.blueText}>{props.otherTeamPoints}</strong> poäng var!</p>
                </Col>
            </Row>
        </Container>
    )
} 

export default Result;