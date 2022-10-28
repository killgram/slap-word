import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  isPlaySound?: boolean
}

export interface ICleanSetting {
  type: ActionTypes.CLEAN_SETTING
}

export interface ISetSoundtrackStatus {
  type: ActionTypes.SET_SOUNDTRACK_STATUS
  isPlaySound?: boolean
}

export type IAction = ICleanSetting | ISetSoundtrackStatus
