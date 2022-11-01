import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  isPlaySound?: boolean
  wordOfDayTime?: number
}

export interface ICleanSetting {
  type: ActionTypes.CLEAN_SETTING
}

export interface ISetSoundtrackStatus {
  type: ActionTypes.SET_SOUNDTRACK_STATUS
  isPlaySound?: boolean
}

export interface IUpdateWordOfDayLastTime {
  type: ActionTypes.UPDATE_WORD_OF_DAY_LAST_TIME
}

export type IAction =
  | ICleanSetting
  | ISetSoundtrackStatus
  | IUpdateWordOfDayLastTime
