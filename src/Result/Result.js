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
                    alert('Tack för att du deltog i denna deltävling! Nu är du klar och kan stänga ned hemsidan!')
                }, 3000)
            }
            <Row className={classes.row}>
                <Col md={6} className={classes.myTeam}>
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