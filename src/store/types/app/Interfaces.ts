import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  isAuthorized?: boolean
  isLoading?: boolean
  error?: string
  apiIsReady?: boolean
}

export interface IStartup {
  type: ActionTypes.STARTUP
}

export interface ICleanApp {
  type: ActionTypes.CLEAN_APP
}

export type IAction = IStartup | ICleanApp
