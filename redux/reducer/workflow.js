import { cartData } from '../../components/dashboardComp/cartData';
import types from '../types';

const initial_state = {

    cartData: [],
    totalPrice: 0,
    productNames: []
}

export default function(state = initial_state, action) {
    switch (action.type) {

        case types.ADD_TO_CART:
            // const newCartData = action.payload
            return {...state,
                cartData: [...state.cartData, action.payload]
            }
            break;
        case types.DELETE_FROM_CART:


            const index = state.cartData.findIndex(item => item.id === action.payload.id);
            return {
                ...state,
                cartData: state.cartData.filter((_, i) => i !== index)
            }




        case types.SET_TOTAL:
            return {...state,
                totalPrice: action.payload
            }
        case types.GET_PRODUCT_NAMES:
            return {...state,
                productNames: action.payload
            }

        default:
            return {...state }
    }
}