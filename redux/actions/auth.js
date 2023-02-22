import { GET_ABOUT, GET_ACTIVITY, GET_BOOKS, GET_COLLEGE, GET_CONTACT, GET_DEPARTMENT, GET_NOTICE, GET_TEAM, LOGIN, SIGNUP } from "../../config/Urls";
import { apiGet, apiGetById, apiPost, clearUserData, setUserData } from "../../utils/utils";
import store from "../store";
import types from "../types";

const { dispatch } = store;

export const saveUserData = (data) => {
    dispatch({
        type: types.LOGIN,
        payload: data
    })
}

export function login(data) {
    return new Promise((resolve, reject) => {
        return apiPost(LOGIN, data).then((res) => {
            if (res.success) {
                setUserData(res).then(() => {
                    resolve(res)
                    console.log("gg here", res)
                    saveUserData(res)
                });
                return
            }
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}
export function signUp(data) {
    return apiPost(SIGNUP, data)
}


export function getBooks(data) {
    return apiGet(GET_BOOKS, data)
}
export function getCollege(data) {
    return apiGet(GET_COLLEGE, data)
}
export function getInfoById(id) {
    return apiGetById(GET_DEPARTMENT, id)
}
export function getTeamById(id) {
    return apiGetById(GET_TEAM, id)
}
export function getActivityById(id) {
    return apiGetById(GET_ACTIVITY, id)
}
export function getNoticeById(id) {
    return apiGetById(GET_NOTICE, id)
}
export function getAboutById(id) {
    return apiGetById(GET_ABOUT, id)
}
export function getContactById(id) {
    return apiGetById(GET_CONTACT, id)
}

export function isLogin(data) {
    dispatch({
        type: types.IS_LOGIN,
        payload: data
    })
}
export function logout() {
    dispatch({ type: types.CLEAR_REDUX_STATE })
    clearUserData()
}