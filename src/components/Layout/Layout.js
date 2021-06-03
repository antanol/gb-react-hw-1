import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, CssBaseline, Container, IconButton, Toolbar, Tooltip, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Chat from '../Chat/Chat';
import ChatList from '../ChatList/ChatList';

function Layout(props){
    let { chatId } = props;
    if (!chatId){
        chatId = 0;
    }

    let chats = [
        {title: 'Чат для монологов',  
        messages:[{
            who: 'me',
            text: 'Захватить мир',
            time: '6:16'
        }]},
        {
            title: 'Волков', 
            messages:[{
                who: 'me',
                text: 'покорми Птицу',
                time: '23:15'
            }]},
        {title: 'Громов', messages:[]}
    ];


    return (
        <Container maxWidth='md' className='layout' style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <AppBar position='static'>
                <Toolbar>
                    <Tooltip title='Вернуться ко всем диалогам' aria-label='back'>
                        <IconButton edge='start' color='inherit'>
                            <ArrowBackIcon  />
                        </IconButton>
                    </Tooltip>
                    <Link to = {`/profile/${chatId}`} >
                        <Typography variant='h4'>
                            { chats[chatId].title }
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            
            <Container className='main'>
                <ChatList chats={chats} />
                <Chat 
                    chat={chatId} 
                    chatHistory= { chats[chatId].messages }
                />
            </Container>
        </Container>
    )
};

export default Layout;