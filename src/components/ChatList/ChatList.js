import React from 'react';

import './ChatList.scss';

import Contact from './Contact'

function ChatList(props){
    const { chats } = props;

    return (
        <div className='chat-list'>
            <Contact chats={chats}/>
        </div>
    );
};

export default ChatList;
