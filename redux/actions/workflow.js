import { apiGet, apiPost, clearUserData, setUserData } from "../../utils/utils";
import store from "../store";
import types from "../types";

const { dispatch } = store;




export function addToCart(data) {
    dispatch({
        type: types.ADD_TO_CART,
        payload: data
    })
}
export function setCartPrice(data) {
    dispatch({
        type: types.SET_TOTAL,
        payload: data
    })
}
export function setProductNames(data) {
    dispatch({
        type: types.GET_PRODUCT_NAMES,
        payload: data
    })
}
export function setBookData(data) {
    dispatch({
        type: types.SET_BOOK_DATA,
        payload: data
    })
}
export function deleteFromCart(data) {
    dispatch({
        type: types.DELETE_FROM_CART,
        payload: data
    })
}