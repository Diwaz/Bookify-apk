export const API_BASE_URL = 'https://jsonplaceholder.typicode.com'
    //'http://192.168.1.68:3000/api/v1'
    //'https://182.93.93.92:8443'
    //'http://192.168.1.68:3000/api/v1'

export const getApiUrl = (endpoint) => {
    return API_BASE_URL + endpoint;
}


export const GET_USERS = getApiUrl('/user');

export const LOGIN = getApiUrl('/user/login/');
export const SIGNUP = getApiUrl('/user/register');
export const GET_BOOKS = getApiUrl('/photos');