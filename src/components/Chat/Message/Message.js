import React from 'react';
import PropTypes from 'prop-types';

import { SENDERS } from '../../../constants';

function Message(props){
    const {history} = props;

    return (
        history.map((message, index) => 
            <div 
              className={ message.who===SENDERS.me ? 'message me' : 'message'} 
              key={ index }
            >
                <header>
                    <span className='author'> { message.who === SENDERS.me?'Вы':message.who } </span>
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