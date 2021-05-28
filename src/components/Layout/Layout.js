import React from 'react';
import { AppBar, CssBaseline, Container, IconButton, Toolbar, Tooltip, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Chat from './Chat/Chat';
import ChatList from './ChatList/ChatList';

function Layout(){
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
                    <Typography variant='h4'>
                        Чат для монологов
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Container className='main'>
                <ChatList/>
                <Chat/>
            </Container>
        </Container>
    )
};

export default Layout;