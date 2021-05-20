import React from 'react';

function Message(props){
    return (
        props.history.map((message, index) => 
            <div className='message' key={index}>
                { message }
            </div>
        )
    )
};

export default Message;