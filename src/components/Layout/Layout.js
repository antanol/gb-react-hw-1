import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Container, IconButton, Toolbar, Tooltip, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Chat from '../Chat/Chat';
import ChatList from '../ChatList/ChatList';

function Layout(props){
    let { chatId } = props;

    const chats = useSelector( globalState => globalState.chats.talks[chatId] );
    const users = useSelector( globalState => globalState.profile.users );

    let thisUser = users[chats.userId];

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
                    <Link to = {`/profile/${chats.userId}`} >
                        <Typography variant='h6'>
                            {thisUser ? thisUser.name : 'Пользователь не найден'}
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            
            <Container className='main'>
                <ChatList />
                <Chat 
                    chatId={chatId}
                />
            </Container>
        </Container>
    )
};

export default Layout;