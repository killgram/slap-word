import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  isAuthorized?: boolean
  isLoading?: boolean
  error?: string
  serverIsReady?: boolean
  login?: string
  password?: string
  maxScore?: number
  accessToken?: string
}

export interface IStartup {
  type: ActionTypes.STARTUP
}

export interface ICleanApp {
  type: ActionTypes.CLEAN_APP
}

export interface IServerIsReady {
  type: ActionTypes.SERVER_IS_READY
}

export interface ILoginRequest {
  type: ActionTypes.LOGIN_REQUEST
  login?: string
  password?: string
}

export interface ILoginSuccess {
  type: ActionTypes.LOGIN_SUCCESS
  login?: string
  password?: string
  maxScore?: number
  accessToken?: string
  isAuthorized?: boolean
}

export interface ILoginError {
  type: ActionTypes.LOGIN_ERROR
}

export interface ILogout {
  type: ActionTypes.LOGOUT
}

export type IAction =
  | IStartup
  | ICleanApp
  | IServerIsReady
  | ILoginRequest
  | ILoginSuccess
  | ILoginError
  | ILogout
