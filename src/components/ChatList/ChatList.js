import React from 'react';
import { useSelector } from 'react-redux';

import Contact from './Contact'

function ChatList(){
    const chats = useSelector( globalState => globalState.chats.talks );

    return (
        <div className='chat-list'>
            <Contact chats={chats}/>
        </div>
    );
};

export default ChatList;
