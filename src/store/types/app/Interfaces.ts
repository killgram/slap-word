import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  isAuthorized?: boolean
  isLoading?: boolean
  error?: string
  username?: string
  userId?: string
  version?: string
  updateModal?: boolean
}

export interface IStartup {
  type: ActionTypes.STARTUP
}

export interface ICleanApp {
  type: ActionTypes.CLEAN_APP
}

export type IAction = IStartup | ICleanApp
