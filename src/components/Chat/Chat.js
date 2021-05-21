import { hot } from 'react-hot-loader/root';
import React from 'react';

import Message from './Message';

function Chat(){

    let [messages, setMessages] = React.useState([]);
    let [inputValue, setInputValue] = React.useState('');


    const onButtonClick = () => {
        setMessages([...messages, inputValue]);

        setInputValue('');
    }

    const onInputChange = (evt) => {
        setInputValue(evt.target.value);
    }

    return (
        <div className='chat-window'>
            <header>
                <i className='fa fa-arrow-left' aria-hidden='true' title='Вернуться ко всем диалогам'></i>
                <h1>Чат для монологов</h1> апорпро
            </header>
            <main>
                <Message history={messages} who='me' time='15:39'/>
            </main>
            <footer>
                <textarea 
                    placeholder='Введите сообщение . . .'
                    value={inputValue} 
                    onChange={onInputChange}
                />
                <button onClick={onButtonClick}>
                    <i className='fa fa-paper-plane' aria-hidden='true' title='Отправить'></i>
                </button>
            </footer>
        </div>
    )
};

export default hot(Chat);