export const ADD_MESSAGE = 'CHAT::ADD_MESSAGE';

export const addMessage = ({chatId, newMessage}) => {
    return {
        type: ADD_MESSAGE,
        payload: newMessage,
        chatId
    }
};