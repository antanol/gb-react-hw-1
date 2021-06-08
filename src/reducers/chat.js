import update from 'react-addons-update';
import { ADD_MESSAGE, ADD_CHAT } from '../actions/chat';

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
            ]
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
            ]
        },
        2: {
            userId: 123402,
            messages:[]
        }
    }
};

export const messagesReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_MESSAGE:
            return update(state, {
                talks: {
                    $merge:  {
                        [action.chatId]: {
                            userId: state.talks[action.chatId].userId,
                            messages: [...state.talks[action.chatId].messages,
                                        action.payload
                            ]
                        }
                    }
                }
            });
        case ADD_CHAT:
            return update(state, {
                talks: {
                    $merge:  {
                        [Object.keys(state.talks).length]: {
                            userId: 404,
                            messages: [action.payload]
                        }
                    }
                }
            });
        default:
            return state;
    }
};