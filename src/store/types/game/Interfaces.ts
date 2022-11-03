import { ActionTypes } from './ActionTypes'

export interface ILine {
  coincidence?: boolean
  missing?: boolean
  hit?: boolean
  name: string
}

interface IKeyboardLineConfig<T> {
  [key: string]: Array<T>
}

interface ITableLineConfig<T> {
  [key: number]: Array<T>
}

export type IKeyboardLine = IKeyboardLineConfig<ILine>
export type ITableLine = ITableLineConfig<ILine>

export interface IInitialState {
  isLoading?: boolean
  word?: string
  keyboardWords?: IKeyboardLine
  isCheckLoading?: boolean
  isHit?: boolean
  wordLength?: number
  tableWords?: ITableLine
  currentLine?: number
}

export interface ICleanGame {
  type: ActionTypes.CLEAN_GAME
}

export interface IGetWordOfTheDay {
  type: ActionTypes.GET_WORD_OF_THE_DAY
}

export interface IOnWordOfTheDaySuccess {
  type: ActionTypes.ON_WORD_OF_THE_DAY_SUCCESS
  word?: string
}

export interface ISetKeyboard {
  type: ActionTypes.SET_KEYBOARD
  keyboardWords?: IKeyboardLine
}

export interface ICheckWordRequest {
  type: ActionTypes.CHECK_WORD_REQUEST
  word?: string
}

export interface IOnCheckWordSuccess {
  type: ActionTypes.ON_CHECK_WORD_SUCCESS
  isHit?: boolean
}

export interface ICheckWordError {
  type: ActionTypes.CHECK_WORD_ERROR
}

export interface ICloseGame {
  type: ActionTypes.CLOSE_GAME
  isDone?: boolean
}

export interface ISetupGameConfig {
  type: ActionTypes.SETUP_GAME_CONFIG
  wordLength?: number
  tableWords?: ITableLine
  currentLine?: number
}

export interface IEnterWord {
  type: ActionTypes.ENTER_WORD
  currentLine?: number
  word?: string
}

export interface IUpdateCurrentLine {
  type: ActionTypes.UPDATE_CURRENT_LINE
  currentLine?: number
}

export interface IDeleteWord {
  type: ActionTypes.DELETE_WORD
  currentLine?: number
}

export type IAction =
  | ICleanGame
  | IGetWordOfTheDay
  | IOnWordOfTheDaySuccess
  | ISetKeyboard
  | ICheckWordRequest
  | IOnCheckWordSuccess
  | ICloseGame
  | ISetupGameConfig
  | IUpdateCurrentLine
  | IEnterWord
  | IDeleteWord
  | ICheckWordError
