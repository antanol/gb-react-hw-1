import React from 'react';

import Message from './Message';

function Chat(){

    let [messages, setMessages] = React.useState([]);
    let [inputValue, setInputValue] = React.useState('');


    const onButtonClick = () => {
        console.log('Check: ', { messages });
  
        setMessages([...messages, inputValue]);

        inputValue = '';
    }

    const onInputChange = (evt) => {
        setInputValue(evt.target.value);
    }

    return (
        <div className='chat-window'>
            <header>
                <i className='fa fa-arrow-left' aria-hidden='true' title='Вернуться ко всем диалогам'></i>
                <h1>Чат для монологов</h1>
            </header>
            <main>
                <Message history={messages}/>
            </main>
            <footer>
                <textarea value={inputValue} onChange={onInputChange}/>
                <button onClick={onButtonClick}>
                    <i className='fa fa-paper-plane' aria-hidden='true' title='Отправить'></i>
                </button>
            </footer>
        </div>
    )
};

export default Chat;