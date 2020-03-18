import React, { useState, useEffect } from 'react';
//import './App.css';
import Start from './start/startContainer.js';
import Chat from './chat/chatContainer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App() {
  const [email, setEmail] = useState("rrudling@kth.se");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState('');

  const [emailInChat, setEmailInChat] = useState("rrudling@kth.se");

    useEffect( () => {
        setEmailInChat(email);
    }, [email])
  

  const updatePassword = e => {
    setPassword(e.target.value);
  };

    function updateEmail(newEmail) {
        setEmail(newEmail)
    }

// Kanske går att lösa på snyggare sätt än att ha ett separat state för chatView.
//  const [emailInChat, setEmailInChat] = React.useState("No user");


  return (    
  <Router>
    <Switch>
        <Route exact path="/" >
            <Start 
            email = {email}
            setEmail = {setEmail}
            password = {password}
            setPassword = {updatePassword} // Vänster är blir variabelnamnet
            loginError = {loginError}
            setLoginError = {setLoginError}
            />
        </ Route>
        
        <Route exact path="/ny_firebase_chatt" >
          <Start 
          email = {email}
          setEmail = {setEmail}
          password = {password}
          setPassword = {updatePassword} // Vänster är blir variabelnamnet
          loginError = {loginError}
          setLoginError = {setLoginError}
          />
        </Route>
        
        <Route exact path="/chat">
          <Chat 
          emailInChat = {emailInChat}
          />
        </Route>
    </Switch>
  </Router>
  );
}
// Har installerat react, react-router-dom och react-bootstrap

export default App;
