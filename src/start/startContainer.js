import React from 'react';
import StartView from './startView.js'

const Start = ({email, setEmail, password, setPassword, loginError, setLoginError}) => {
    // Dessa två ska uppdateras och sen skickas till gameController.
    /*const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const updateEmail = e => {
        setEmail(e.target.value);
        console.log("I have updated the email! :) It is now: " + email)
    };*/

    return <StartView
    email={email}
    setEmail={setEmail}
    password={password}
    setPassword={setPassword}
    loginError={loginError}
    setLoginError={setLoginError}
    />
}

export default Start;
