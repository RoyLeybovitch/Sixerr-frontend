import { httpService } from './http.service.js'

const ENDPOINT = 'auth'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

async function login(cred) {
    const user = await httpService.post('auth/login', cred)
    if (user) return _saveLocalUser(user)
}
async function signup(cred) {
    const user = await httpService.post('auth/signup', cred)
    return _saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return await httpService.post('auth/logout')
}
async function getLoggedinUser() {
    console.log(JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)))
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

async function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

export const userService = {
    login,
    signup,
    logout,
    getLoggedinUser,
}
