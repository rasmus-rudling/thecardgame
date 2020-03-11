import React from 'react';
import ChatView from './chatView.js'
import { render } from '@testing-library/react';




const Chat = ({emailInChat}) => {
    let myMessages = ["Hej", "hallå", "svara då din lille fis","Hej", "hallå", "svara då din lille fis","Hej", "hallå", "svara då din lille fis"];
    let otherMessages = ["Hej"];
    let otherTeamsMessages = ["xxxxxx", "xxxxxx xx", "xxxxxxxx xxxxxxx xxx", "xxx"];


    function displayText(myMessages){
        console.log("I'm in the displayTest :)")
        if(document.getElementById("textInput") != null){
        var message = document.getElementById("textInput").value;
        console.log("value: " + message)
        myMessages.push(message);
        console.log("My messages array:: " + myMessages)
        document.getElementById("textInput").value = "";
        }
    }
    
    console.log("myMessages is: " + myMessages)

    return <ChatView
    email = {emailInChat}
    myMessages = {myMessages}
    otherMessages = {otherMessages}
    otherTeamsMessages = {otherTeamsMessages}
    displayText = {displayText}
    />
}

export default Chat;