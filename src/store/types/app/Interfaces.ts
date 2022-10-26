import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  isAuthorized?: boolean
  isLoading?: boolean
  error?: string
  serverIsReady?: boolean
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

export type IAction = IStartup | ICleanApp | IServerIsReady
