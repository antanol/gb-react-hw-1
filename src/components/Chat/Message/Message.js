import React from 'react';
import PropTypes from 'prop-types';

import { SENDERS } from '../../../constants';

function Message(props){
    const { history, botSettings } = props;

    const messageClassList = ( message ) => {
    // пробрасываем всё сообщение на случай, если в будущем появятся условия не завязанные на отправителя
        switch (message.who){
            case SENDERS.me:
                return 'message me';
            case SENDERS.bot.inBase:
                return 'message answer-bot';
            default:
                return 'message';
        }
    }

    const messageAuthor = ( message ) =>{
        switch (message.who) {
            case SENDERS.me:
                return 'Вы';
            case SENDERS.bot.title:
                return botSettings.title ? botSettings.title : SENDERS.bot.title;
            default:
                return message.who;
        }
    }

    return (
        history.map((message, index) => 
            <div 
              className={ messageClassList(message) } 
              key={ index }
            >
                <header>
                    <span className='author'> { messageAuthor(message) } </span>
                    <span className='time'> { message.time } </span>
                </header>
                { message.text }  
            </div>
        )
    )
};

Message.propTypes = {
    history: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Message;