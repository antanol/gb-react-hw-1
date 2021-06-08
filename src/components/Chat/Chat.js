import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Fab, Paper, TextField, Tooltip } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import Message from './Message/Message';
import { addMessage, addMessageThunk } from '../../actions/chat';

function Chat(props){
    let { chatId } = props;

    const chats = useSelector( globalState => globalState.chats.talks[chatId] );
    const dispatch = useDispatch();

    let [inputValue, setInputValue] = React.useState('');
    let [showPlaceholder, setShowPlaceholder] = React.useState(false);

    let createMessageElem = ({who, text}) => {
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
        if (chats.messages.length % 2 == 1 && chats.messages.length > 0){
            dispatch(addMessageThunk({chatId: chatId, newMessage: createMessageElem({who: 'С вами говорит автоответчик',  text: 'На данный момент Ваш собеседник недоступен'})}));
        };

    }, [chats]);

    const handleButtonClick = () => {
        if (inputValue) {
            dispatch(addMessage({chatId: chatId, newMessage: createMessageElem({who: 'Я', text:inputValue})}));

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
                <Message history={chats.messages}/>
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