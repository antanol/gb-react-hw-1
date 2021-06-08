export const ADD_CHAT = 'CHAT::ADD_CHAT';
export const ADD_MESSAGE = 'CHAT::ADD_MESSAGE';

export const addMessage = ({chatId, newMessage}) => {
    return {
        type: ADD_MESSAGE,
        payload: newMessage,
        chatId
    }
};

export const addMessageThunk = ({chatId, newMessage}) => {
    return (dispatch) => {
        setTimeout(() => dispatch(addMessage({chatId, newMessage})), 
        1000);
    }
};

export const addChat = (newChat) => {
    return {
        type: ADD_CHAT,
        payload: newChat
    }
};