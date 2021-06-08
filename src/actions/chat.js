export const ADD_CHAT = 'CHAT::ADD_CHAT';
export const ADD_MESSAGE = 'CHAT::ADD_MESSAGE';

export const addMessage = ({chatId, newMessage}) => {
    return {
        type: ADD_MESSAGE,
        payload: newMessage,
        chatId
    }
};

export const addChat = (newChat) => {
    return {
        type: ADD_CHAT,
        payload: newChat
    }
};