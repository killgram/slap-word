import { NavigationType } from '@navigators'
import { game, settings } from '@store/types'
import { IKeyboardLine, ITableLine } from '@store/types/game/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  route?: {
    params: {
      wordLength: string
    }
  }
  keyboardWords?: IKeyboardLine
  isLoading?: boolean
  hitWord?: string
  isHit?: boolean
  isCheckLoading?: boolean
  wordLength?: number
  tableWords?: ITableLine
  currentLine?: number
  isPostLoading?: boolean
}

export interface IState {
  game?: game.IInitialState
  settings?: settings.IInitialState
}

interface IDispatchToProps {
  closeGame?: (isDone?: boolean) => game.IAction
  getWordOfTheDay?: () => game.IAction
  checkWordRequest?: (word: string) => game.IAction
  enterWord?: (currentLine: number, word: string) => game.IAction
  deleteWord?: (currentLine: number) => game.IAction
  wrongWordRequest?: (word: string) => settings.IAction
  renderedTableLine?: (currentLine: number) => game.IAction
  getWordRequest?: (length: string) => game.IAction
}

export type IWordOfTheDayTypesProps = IDispatchToProps & IStateToProps
