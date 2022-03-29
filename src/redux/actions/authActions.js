import {LOGIN, LOGOUT} from '../types/authTypes'

export const loginAction = token => {
  return {
    type: LOGIN,
    payload: token,
  }
}

export const logoutAction = () => {
  return {
    type: LOGOUT,
  }
}
