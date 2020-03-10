import React from 'react';
import ChatView from './chatView.js'

const Chat = ({emailInChat}) => {

    return <ChatView
    email = {emailInChat}
    />
}

export default Chat;