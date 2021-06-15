import { ADD_MESSAGE, ADD_CHAT, UNREAD_CHAT } from '../actions/chat';

const initialState = {
    talks: {
        0: {
            userId: 123415,
            messages:[
                {
                    who: 'Я',
                    text: 'Захватить мир',
                    time: '6:16'
                }
            ],
            answerBot: false,
            bot: {
                isBlinking: false
            },
            unread: false
        },
        1: {
            userId: 123426,
            messages:[
                {
                    who: 'Я',
                    text: 'покорми Птицу',
                    time: '23:15'
                },
                {
                    who: 'Собеседник',
                    text: 'ок',
                    time: '23:16'
                }
            ],
            answerBot: true,
            bot: {
                isBlinking: true,
                title: "Я ОФФЛАЙН"
            },
            unread: false
        },
        2: {
            userId: 123402,
            messages:[],
            answerBot: true,
            bot: {
                isBlinking: false,
                answer: "Привет. Как дела?"
            },
            unread: false
        }
    }
};

export const messagesReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_MESSAGE:
            return {
                    talks: {
                        ...state.talks,
                        [action.chatId]: {
                            userId: state.talks[action.chatId].userId,
                            messages: [...state.talks[action.chatId].messages,
                                        action.payload
                            ],
                            answerBot: state.talks[action.chatId].answerBot,
                            bot: state.talks[action.chatId].bot
                        }
                    }
                };
        case ADD_CHAT:
            return {
                talks: {
                    ...state.talks,
                    [Object.keys(state.talks).length]: {
                        userId: 404,
                        messages: [action.payload]
                    }
                }
            };
        case UNREAD_CHAT:
            return {
                talks: {
                    ...state.talks,
                    [action.chatId]: {
                        ...state.talks[action.chatId],
                        unread: action.payload.isBlinking
                    }
                }
            }
        default:
            return state;
    }
};