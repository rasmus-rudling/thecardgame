import React from 'react';
import ChatView from './chatView.js'
import { render } from '@testing-library/react';




const Chat = ({emailInChat}) => {
    //let myMessages = ["Hej", "hallå", "svara då din lille fis","Hej", "hallå", "svara då din lille fis","Hej", "hallå", "svara då din lille fis"];
    var message1 = {name:"Johanna Simfors", image: "https://www.positivelysplendid.com/wp-content/uploads/2013/09/Circle-Crop-Profile-300x300.png", time:"13:30", message:"Hej"};
    var message2 = {name:"Johanna Simfors",  image: "https://www.positivelysplendid.com/wp-content/uploads/2013/09/Circle-Crop-Profile-300x300.png", time:"13:32", message:"Hallå"};
    var message3 = {name:"Johanna Simfors", image: "https://www.positivelysplendid.com/wp-content/uploads/2013/09/Circle-Crop-Profile-300x300.png",  time:"13:36", message:"svara då din lille fissvara då din lille fissvara då din lille fissvara då din lille fissvara då din lille fissvara då din lille fissvara då din lille fissvara då din lille fis"};
    var message4 = {name:"Johanna Simfors", image: "https://www.positivelysplendid.com/wp-content/uploads/2013/09/Circle-Crop-Profile-300x300.png",  time:"13:36", message:"hallååååååååå"};

    let myMessages = [message1, message2, message3, message4];

    //let otherMessages = ["Hej"];
    var otherMessages1 = {name:"Rasmus", image:"https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-9/68780115_10218157623043647_869986299145093120_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=mwN7yisOxXQAX8Pe3nH&_nc_ht=scontent-arn2-2.xx&oh=adb96402da673a7884160afacee987f7&oe=5E957F7B", time:"13:37", message:"Hej!"};
    let otherMessages = [otherMessages1];
    let otherTeamsMessages = ["xxxxxx", "xxxxxx xx", "xxxxxxxx xxxxxxx xxx", "xxx"];
    let adminMessage = ["Är ni redo att rösta? Klicka här. Annars: fortsätt diskutera"];


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
    adminMessage = {adminMessage}
    displayText = {displayText}
    />
}

export default Chat;