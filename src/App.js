import React, { useState } from 'react';
import StartView from './start/startView.js';
import ChatView from './chat/chatView.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
    const [email, setEmail] = useState("rrudling@kth.se");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState('');

    function updatePassword(newPassword) {
        setPassword(newPassword);
    };

    function updateEmail(newEmail) {
        console.log(newEmail, 'raz12')
        setEmail(newEmail)
    }

// Kanske går att lösa på snyggare sätt än att ha ett separat state för chatView.
//  const [emailInChat, setEmailInChat] = React.useState("No user");

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
                
                <Route exact path="/ny_firebase_chatt" >
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
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
