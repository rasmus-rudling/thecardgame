import React, { useState } from 'react';
import StartView from './start/startView';
import ChatView from './chat/chatView';
import Result from './Result/Result';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
    const [email, setEmail] = useState("anna@kth.se");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState('');
    const [finalCard, setFinalCard] = useState('');
    const [otherTeamFinalCard, setOtherTeamFinalCard] = useState('');
    const [myPoints, setMyPoints] = useState(-1);
    const [otherTeamPoints, setOtherTeamPoints] = useState(-1);

    function resultHandler(_chosenCard, _otherTeamCard, _myPoints, _otherTeamPoints) {
        setFinalCard(_chosenCard);
        setOtherTeamFinalCard(_otherTeamCard);
        setMyPoints(_myPoints);
        setOtherTeamPoints(_otherTeamPoints);
    }

    function updatePassword(newPassword) {
        setPassword(newPassword);
    };

    function updateEmail(newEmail) {
        setEmail(newEmail)
    }

    function updateEmail(newEmail) {
        setEmail(newEmail)
    }

    return (    
        <Router>
            <Switch>
                <Route exact path="/" >
                    <StartView
                        email = {email}
                        setEmail = {updateEmail}
                        password = {password}
                        setPassword = {updatePassword} // Vänster är blir variabelnamnet
                        loginError = {loginError}
                        setLoginError = {setLoginError}
                    />
                </ Route>
                
                <Route exact path="/thecardgame" >
                    <StartView
                        email = {email}
                        setEmail = {updateEmail}
                        password = {password}
                        setPassword = {updatePassword} // Vänster är blir variabelnamnet
                        loginError = {loginError}
                        setLoginError = {setLoginError}
                    />
                </Route>
                
                <Route exact path="/chat">
                    <ChatView
                        email = {email}
                        resultHandler = {resultHandler}
                    />
                </Route>

                <Route exact path="/result">
                    <Result
                        finalCard = {finalCard}
                        otherTeamFinalCard = {otherTeamFinalCard}
                        myPoints = {myPoints}
                        otherTeamPoints = {otherTeamPoints}
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
