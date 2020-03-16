import React, { useState } from 'react';
import ChatView from './chatView.js';


function ChatContainer({emailInChat}) {
    return (
        <ChatView
            email = {emailInChat}
        />
    )
}

export default ChatContainer;