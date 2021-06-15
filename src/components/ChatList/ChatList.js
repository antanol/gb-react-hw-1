import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import Contact from './Contact/Contact'
import { addChat } from '../../actions/chat';

function ChatList(){
    const chats = useSelector( globalState => globalState.chats.talks );
    const dispatch = useDispatch();

    const handleBtnClick = () => {
        dispatch(addChat("Xt[jd"));
    };

    return (
        <div className='chat-list'>
            
            <Contact chats={chats}/>

            <Button 
                variant='outlined' 
                disableElevation
                onClick={handleBtnClick}
            >
                Добавить новый чат
            </Button>

        </div>
    );
};

export default ChatList;
