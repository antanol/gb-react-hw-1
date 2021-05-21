import React from 'react';
import PropTypes from 'prop-types';

function Message(props){
    const {history} = props;

    return (
        history.map((message, index) => 
            <div 
              className={message.who=='me'?'message me':'message'} 
              key={index}
            >
                <header>
                    <span className='author'> {message.who=='me'?'Вы':message.who} </span>
                    <span className='time'> {message.time} </span>
                </header>
                { message.text }  
            </div>
        )
    )
};

Message.propTypes = {
    history: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Message;