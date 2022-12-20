import { app } from '@store/types'

/**
 *
 * @return {app.IAction}
 */
export function startup(): app.IAction {
  return {
    type: app.ActionTypes.STARTUP,
  }
}

/**
 *
 * @return {app.IAction}
 */
export function cleanApp(): app.IAction {
  return {
    type: app.ActionTypes.CLEAN_APP,
  }
}

/**
 *
 * @return {app.IAction}
 */
export function serverIsReady(): app.IAction {
  return {
    type: app.ActionTypes.SERVER_IS_READY,
  }
}

/**
 *
 * @param {string} login
 * @param {string} password
 * @return {app.IAction}
 */
export function loginRequest(login: string, password: string): app.IAction {
  return {
    type: app.ActionTypes.LOGIN_REQUEST,
    login,
    password,
  }
}

/**
 *
 * @return {app.IAction}
 */
export function loginError(): app.IAction {
  return {
    type: app.ActionTypes.LOGIN_ERROR,
  }
}

/**
 *
 * @param {string} login
 * @param {string} password
 * @param {number} maxScore
 * @param {string} accessToken
 * @return {app.IAction}
 */
export function loginSuccess(
  login: string,
  password: string,
  maxScore: number,
  accessToken: string,
): app.IAction {
  return {
    type: app.ActionTypes.LOGIN_SUCCESS,
    login,
    password,
    maxScore,
    accessToken,
  }
}

/**
 *
 * @return {app.IAction}
 */
export function logout(): app.IAction {
  return {
    type: app.ActionTypes.LOGOUT,
  }
}

/**
 *
 * @param {string} login
 * @param {string} password
 * @return {app.IAction}
 */
export function signUpRequest(login: string, password: string): app.IAction {
  return {
    type: app.ActionTypes.SIGN_UP_REQUEST,
    login,
    password,
  }
}

/**
 *
 * @param {number} maxScore
 * @return {app.IAction}
 */
export function updateMaxScore(maxScore: number): app.IAction {
  return {
    type: app.ActionTypes.UPDATE_MAX_SCORE,
    maxScore,
  }
}
