import React from 'react';
import PropTypes from 'prop-types';

function Message(props){
    return (
        props.history.map((message, index) => 
            <div 
              className={props.who=='me'?'message me':'message'} 
              key={index}
            >
                { message }
            </div>
        )
    )
};

Message.propTypes = {
    history: PropTypes.arrayOf(PropTypes.string).isRequired,
    who: PropTypes.string.isRequired
}
export default Message;