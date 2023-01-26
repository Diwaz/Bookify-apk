import types from '../types';

const initial_state = {
    isLogin: false,
    userData: {},
    booksData: {},

}

export default function(state = initial_state, action) {
    switch (action.type) {
        case types.LOGIN:
            const data = action.payload
            return { userData: data }
            break;
            // case types.SIGNUP:
            //     const newData = action.payload
            //     return { userData: newData }
        case types.IS_LOGIN:
            const status = action.payload
            return { isLogin: status }
            break;

        case types.GET_BOOKS:
            const booksData = action.payload
            return { booksData: booksData }
            break;



        default:
            return {...state }
    }
}