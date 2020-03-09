import React from 'react';
import './App.css';
import Start from './start/startContainer.js'
import Chat from './chat/chatContainer.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import StartComponent from './start/startView.js';
import ChatComponent from './chat/chatView.js';



function App() {
  const [email, setEmail] = React.useState("Default");
  const [password, setPassword] = React.useState("");
  const [loginError, setLoginError] = React.useState('');

  const [emailInChat, setEmailInChat] = React.useState("default");

    React.useEffect( () => {
        setEmailInChat(email);
        console.log("I'm in the useEffect! :)")
    }   , [email])
  

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  // Kanske går att lösa på snyggare sätt än att ha ett separat state för chatView.
//  const [emailInChat, setEmailInChat] = React.useState("No user");
  console.log("Email in chat in App.js: " + email);


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
