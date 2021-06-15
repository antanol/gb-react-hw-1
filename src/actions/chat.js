export const ADD_CHAT = 'CHAT::ADD_CHAT';
export const ADD_MESSAGE = 'CHAT::ADD_MESSAGE';
export const UNREAD_CHAT = 'CHAT::UNREAD_CHAT';

export const unreadChat = ({ chatId, isBlinking }) => {
    return {
        type: UNREAD_CHAT,
        payload: {
            isBlinking
        },
        chatId
    }
};

export const addMessage = ({chatId, newMessage}) => {
    return {
        type: ADD_MESSAGE,
        payload: newMessage,
        chatId
    }
};

export const addMessageThunk = ({chatId, newMessage}) => {
    return (dispatch, getState) => {
        dispatch(addMessage({ chatId, newMessage }))

        dispatch(unreadChat({ chatId, isBlinking: true }))
        setTimeout(() => {
            dispatch(unreadChat({ chatId, isBlinking: false }))
        }, 3000)
    }
};

export const addChat = (newChat) => {
    return {
        type: ADD_CHAT,
        payload: newChat
    }
};