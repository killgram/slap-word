import { ActionTypes } from './ActionTypes'

export interface ISupportData {
  [key: string]: any
}

export interface IInitialState {
  isLoading?: boolean
  email?: string
  isHelpLoading?: boolean
  helpData?: ISupportData
}

export interface ICleanSupport {
  type: ActionTypes.CLEAN_SUPPORT
}

export interface IGetSupport {
  type: ActionTypes.GET_SUPPORT
}

export interface IOnSupportSuccess {
  type: ActionTypes.ON_SUPPORT_SUCCESS
  email?: string
}

export interface IOnGetR3D3InfoSuccess {
  type: ActionTypes.ON_GET_R3D3_INFO_SUCCESS
  helpData?: ISupportData
}

export type IAction =
  | ICleanSupport
  | IGetSupport
  | IOnSupportSuccess
  | IOnGetR3D3InfoSuccess
