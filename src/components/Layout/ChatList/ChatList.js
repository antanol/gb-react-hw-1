import React from 'react';
import { Card, CardHeader } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import Contact from './Contact'

function ChatList(){
    return (
        <div className='chat-list'>
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
        </div>
    );
};

export default ChatList;
