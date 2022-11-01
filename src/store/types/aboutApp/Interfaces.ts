import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  isLoading?: boolean
  appGit?: string
  authorGit?: string
  author?: string
  name?: string
  appVersion?: string
}

export interface ICleanAboutApp {
  type: ActionTypes.CLEAN_ABOUT_APP
}

export interface IGetAboutApp {
  type: ActionTypes.GET_ABOUT_APP
}

export interface IOnAboutAppSuccess {
  type: ActionTypes.ON_ABOUT_APP_SUCCESS
  appGit?: string
  authorGit?: string
  author?: string
  name?: string
  appVersion?: string
}

export type IAction = ICleanAboutApp | IGetAboutApp | IOnAboutAppSuccess
