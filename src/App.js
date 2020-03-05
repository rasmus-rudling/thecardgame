import React from "react";
import { useInput } from './Hooks/input-hook.js';
import firebase from "./Conifg/Firebase.js"

export default function App(props) {
    const { value:mail, bind:bindMail, reset:resetMail } = useInput('');
    const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const m = mail
        const p = password

        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(m, p);

        promise.catch(e => console.log(e));
        resetMail();
        resetPassword();
    }

    firebase.auth().onAuthStateChanged(firebaseUser => {

        // Om användaren existerar
        if (firebaseUser) {
            // Skicka användare till chatten
            console.log(firebaseUser.email)
        } else {
            // Skicka felmeddelande till användaren
            console.log('Du är utloggad!')
        }
    });

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label>
                Mail:
                <input type="email" {...bindMail} />
                </label>
                <br />
                <label>
                Password:
                <input type="text" {...bindPassword} />
                </label>
                <br />
                <input type="submit" value="Logga in" />
            </form>

            <button onClick = {() => {firebase.auth().signOut()}}>Logga ut</button>

            <h2>Mail: {mail}</h2>
            <h2>Lösenord: {password}</h2>
        </div>
      
      
    );
  }