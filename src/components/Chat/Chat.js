import React from 'react';

import Message from './Message';

function Chat(){
    let [messages, setMessages] = React.useState([]);
    let [inputValue, setInputValue] = React.useState('');
    let [showPlaceholder, setShowPlaceholder] = React.useState(false);
    
    // аналог componentDidUpdate
    React.useEffect( () => {
        // console.log("Робот отвечает");

        if (messages.length % 2 == 0){
            setMessages([...messages, {
                text: 'На данный момент Ваш собеседник недоступен', 
                who: 'С вами говорит автоответчик',
                time: function(){
                    let date = new Date();

                    return `${date.getHours()}:${date.getMinutes()}`
                }()
            }]);
        };

    }, [messages]);

    const handleButtonClick = () => {
        if (inputValue) {
            setMessages([...messages, {
                text: inputValue, 
                who: 'me',
                time: function(){
                    let date = new Date();

                    return `${date.getHours()}:${date.getMinutes()}`
                }()
            }]);

            setInputValue('');
        }
    }

    const handleInputChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleInputKeyDown = (evt) => {
        if (evt.code == "Enter" && evt.ctrlKey){
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
            <header>
                <i className='fa fa-arrow-left' aria-hidden='true' title='Вернуться ко всем диалогам'></i>
                <h1>Чат для монологов</h1>
            </header>
            <main>
                <Message history={messages}/>
            </main>
            <footer>
                <textarea 
                    placeholder='Введите сообщение . . .'
                    value={inputValue} 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
                <button
                    onClick={handleButtonClick}
                    onMouseOver={handleButtonMouseOver}
                    onMouseOut={handleButtonMouseOut}
                >
                    <i className='fa fa-paper-plane' aria-hidden='true' title='Отправить'></i>
                </button>
                <div className={showPlaceholder?'placeholder placeholder_show':'placeholder'}>
                    Вы также можете нажимать ctrl+Enter, чтобы отправить сообщение
                </div>
            </footer>
        </div>
    )
};

export default Chat;