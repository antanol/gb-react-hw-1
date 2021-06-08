import { CHANGE_NAME } from '../actions/profile';

const initialState = {
    users: {
        123415: {
            name: 'Разумовский',
            bday: '7/7/1993',
            age: 28,
            city: 'Санкт-Петербург'
        },
        123426: {
            name: 'Волков',
            bday: '9/7/1993',
            age: 28,
            city: 'Санкт-Петербург'
        },
        123402: {
            name: 'Громов',
            bday: '9/7/1992',
            age: 29,
            city: 'Санкт-Петербург'
        }
    }
};

export const profileReducer = (state = initialState, action) =>{
    switch (action.type){
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
};