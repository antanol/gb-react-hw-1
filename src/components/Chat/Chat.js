import React from 'react';
import { AppBar, Box, CssBaseline, Container, Fab, IconButton, Paper, TextField, Toolbar, Tooltip, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';

import Message from './Message';

function Chat(){
    let [messages, setMessages] = React.useState([]);
    let [inputValue, setInputValue] = React.useState('');
    let [showPlaceholder, setShowPlaceholder] = React.useState(false);
    
    const addMessage = (who, text) => {
        return {
            who: who,
            text: text, 
            time: function(){
                let date = new Date();
                let minutes = date.getMinutes();
                if (minutes<10){
                    minutes = '0' + minutes;
                }
                
                return `${date.getHours()}:${minutes}`
            }()
        }
    }

    // аналог componentDidUpdate
    React.useEffect( () => {
        if (messages.length % 2 == 0){
            setMessages([...messages, addMessage('С вами говорит автоответчик', 'На данный момент Ваш собеседник недоступен')]);
        };

    }, [messages]);

    const handleButtonClick = () => {
        if (inputValue) {
            setMessages([...messages, addMessage('me', inputValue)]);

            setInputValue('');
        }
    }

    const handleInputChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleInputKeyDown = (evt) => {
        if (evt.code == 'Enter' && evt.ctrlKey){
            handleButtonClick();
        }
    };

    const handleButtonMouseOver = () => {
        setShowPlaceholder(true);
    };

    const handleButtonMouseOut = () => {
        setShowPlaceholder(false);
    };

    return (
        <div className='chat-window'>
            <CssBaseline />
            <Container maxWidth='sm' style = {{ height: '100vh', display: 'flex', flexDirection: 'column'}}>
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
                
                <Paper style={{ 
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: '#cfe8fc', 
                                flexGrow: 1, 
                                overflow: 'auto'
                }}>
                    <Message history={messages}/>
                </Paper>

                <footer style={ {  display: 'flex' } }>
                    <TextField
                        name='input'
                        fullWidth={ true }
                        label='Введите сообщение . . .'
                        style={ { fontSize: '22px' } }
                        value={ inputValue }
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                    />
                    <Tooltip title='Отправить' aria-label='send'>
                        <Fab
                            onClick={handleButtonClick}
                            onMouseOver={handleButtonMouseOver}
                            onMouseOut={handleButtonMouseOut}
                        >
                            <SendIcon />
                        </Fab>
                    </Tooltip>
                    <div className={showPlaceholder?'placeholder placeholder_show':'placeholder'}>
                        Вы также можете нажимать ctrl+Enter, чтобы отправить сообщение
                    </div>
                </footer>
            </Container>
        </div>
    )
};

export default Chat;