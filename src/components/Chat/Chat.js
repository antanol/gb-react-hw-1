import React from 'react';
import { Fab, Paper, TextField, Tooltip } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import Message from './Message/Message';

function Chat(props){
    let { chat, chatHistory } = props;
    
    let [messages, setMessages] = React.useState(chatHistory);
    let [inputValue, setInputValue] = React.useState('');
    let [showPlaceholder, setShowPlaceholder] = React.useState(false);

    const addMessage = ({who, text}) => {
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
            setMessages([...messages, addMessage({who: 'С вами говорит автоответчик',  text: 'На данный момент Ваш собеседник недоступен'})]);
        };

    }, [messages]);

    const handleButtonClick = () => {
        if (inputValue) {
            setMessages([...messages, addMessage({who: 'me', text:inputValue})]);

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
            <Paper style={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: '#cfe8fc', 
                            flexGrow: 1
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
        </div>
    )
};

export default Chat;