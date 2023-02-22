import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../redux/store';
import types from '../redux/types';

import { useSelector } from 'react-redux';

const { dispatch, getState } = store;



export async function getHeaders() {
    let userData = await AsyncStorage.getItem('userData');
    if (userData) {
        userData = JSON.parse(userData);
        console.log(userData.data, 'header')
        return {
            authorization: `${userData.data}`,
        };
    }
    return {};
}

export async function apiReq(
    endPoint,
    data,
    method,
    headers,
    requestOptions = {}
) {

    return new Promise(async(res, rej) => {
        const getTokenHeader = await getHeaders();
        headers = {
            ...getTokenHeader,
            ...headers
        };

        if (method === 'get' || method === 'delete') {
            data = {
                ...requestOptions,
                ...data,
                headers
            };
        }

        axios[method](endPoint, data, { headers })
            .then(result => {

                const { data } = result;

                if (data.success === false) {
                    return rej(data);
                }

                return res(data);
            })
            .catch(error => {
                console.log(error)
                console.log(error && error.response, 'the error respne')


                if (error && error.response && error.response.data) {
                    if (!error.response.data.message) {
                        return rej({...error.response.data, msg: error.response.data.message || "Network Error" })
                    }
                    return rej(error.response.data)
                } else {
                    return rej({ message: "Network Error", msg: "Network Error" });
                }
                return rej(error);
            });
    });
}

export function apiGetById(endPoint, id) {
    return new Promise(function(resolve, reject) {
        axios.get(endPoint + id, {
                headers: {
                    'Content-Type': 'application/json',
                    // add any additional headers here
                },
            })
            .then(function(response) {
                // resolve with the response data
                return resolve(response.data);
            })
            .catch(function(error) {
                // reject with the error
                return reject(error);
            });
    });
}
export function apiPost(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
    return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'put', headers);
}

export function setItem(key, data) {
    data = JSON.stringify(data);
    return AsyncStorage.setItem(key, data);
}

export function getItem(key) {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key).then(data => {
            resolve(JSON.parse(data));
        });
    });
}

export function removeItem(key) {
    return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate(key) {
    return AsyncStorage.clear();
}

export function setUserData(data) {
    data = JSON.stringify(data);
    return AsyncStorage.setItem('userData', data);
}
export function savePurchasedBook(data) {
    data = JSON.stringify(data);
    return AsyncStorage.setItem('PurchasedBooks', data);
}
export function setCartData(data) {
    data = JSON.stringify(data);
    return AsyncStorage.setItem('cartData', data);
}

export async function getUserData() {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('userData').then(data => {
            resolve(JSON.parse(data));
        });
    });
}
export async function getPurchasedData() {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('PurchasedBooks').then(data => {
            resolve(JSON.parse(data));
        });
    });
}
export async function getCartData() {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('cartData').then(data => {
            resolve(JSON.parse(data));
        });
    });
}
export async function clearUserData() {
    return AsyncStorage.removeItem('userData');
}
export async function clearPurchasedData() {
    return AsyncStorage.removeItem('PurchasedBooks');
}
export const getCartedData = () => {
    const cartData = useSelector((state) => state.workflow.initialBookData);
    const cartId = useSelector((state) => state.workflow.cartData)
    let Idarr = [];
    let dataarr = [];
    Idarr = cartId.map((item) => {
        return item.id;
    })
    console.log('idarrr', Idarr)
    for (let i = 0; i < Idarr.length; i++) {
        dataarr.push(cartData.find((el) => {
            return Idarr[i] === el._id;
        }))
    }
    console.log("Items in cart from getcart", dataarr)
    console.log('items in cart from redux', cartId)
    return dataarr;
}

export const getCartedPrice = () => {

    let totalPrice = 0;
    const cartedItem = getCartedData();

    cartedItem.filter(res => res.price).map((el) => {
        totalPrice = totalPrice + el.price
        console.log(el, el.value)
    });
    console.log(totalPrice)
    return totalPrice;



}