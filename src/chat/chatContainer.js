import React from 'react';
import ChatView from './chatView.js'

const Chat = ({emailInChat}) => {

    console.log("email in chatContainer " + emailInChat)
    return <ChatView
    email = {emailInChat}
    />
}

export default Chat;