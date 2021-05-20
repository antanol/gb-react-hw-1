import React from 'react';
import PropTypes from 'prop-types';

function Message(props){
    return (
        props.history.map((message, index) => 
            <div className='message' key={index}>
                { message }
            </div>
        )
    )
};

Message.propTypes = {
    history: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Message;