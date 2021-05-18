import React from 'react';
import ReactDOM from 'react-dom';

import Message from './Message';

function Chat(){


    return (
        <div className='chat-window'>
            <header>
                <i className='fa fa-arrow-left' aria-hidden='true' title='Вернуться ко всем диалогам'></i>
                <h1>Чат для монологов</h1>
            </header>
            <main>
                <Message />
            </main>
            <footer>
                <input type='text' />
                <button>
                    <i className='fa fa-paper-plane' aria-hidden='true' title='Отправить'></i>
                </button>
            </footer>
        </div>
    )
};

export default Chat;