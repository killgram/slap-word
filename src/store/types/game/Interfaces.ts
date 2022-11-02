import { ActionTypes } from './ActionTypes'

interface ILine {
  coincidence?: boolean
  missing?: boolean
  hit?: boolean
  name: string
}

interface IKeyboardLineConfig<T> {
  [key: string]: Array<T>
}

export type IKeyboardLine = IKeyboardLineConfig<ILine>

export interface IInitialState {
  isLoading?: boolean
  word?: string
  keyboardWords?: IKeyboardLine
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

export type IAction =
  | ICleanGame
  | IGetWordOfTheDay
  | IOnWordOfTheDaySuccess
  | ISetKeyboard
