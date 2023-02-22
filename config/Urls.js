export const API_BASE_URL = 'https://shineducation.com/api'
    //'http://192.168.1.68:3000/api/v1'
    //'https://182.93.93.92:8443'
    //'http://192.168.1.68:3000/api/v1'

export const getApiUrl = (endpoint) => {
    return API_BASE_URL + endpoint;
}
export const getApiUrlwithId = (endpoint) => {
    return API_BASE_URL + endpoint;
}

export const GET_USERS = getApiUrl('/user');

export const LOGIN = getApiUrl('/users/login');
export const SIGNUP = getApiUrl('/users/signup');
export const GET_BOOKS = getApiUrl('/books/getAll');
export const GET_COLLEGE = getApiUrl('/institution/getAll');
export const GET_DEPARTMENT = getApiUrlwithId('/institution/getByRefId-department/')
export const GET_TEAM = getApiUrl('/institution/getByRefId-team/')
export const GET_NOTICE = getApiUrl('/institution/getByRefId-notice/')
export const GET_ABOUT = getApiUrl('/institution/getByRefId-about/')
export const GET_ACTIVITY = getApiUrl('/institution/getByRefId-activity/')
export const GET_CONTACT = getApiUrl('/institution/getByRefId-contact/')