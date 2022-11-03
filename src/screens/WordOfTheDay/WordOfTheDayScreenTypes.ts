import { NavigationType } from '@navigators'
import { game } from '@store/types'
import { IKeyboardLine, ITableLine } from '@store/types/game/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  keyboardWords?: IKeyboardLine
  isLoading?: boolean
  hitWord?: string
  isHit?: boolean
  isCheckLoading?: boolean
  wordLength?: number
  tableWords?: ITableLine
  currentLine?: number
}

export interface IState {
  game?: game.IInitialState
}

interface IDispatchToProps {
  closeGame?: (isDone?: boolean) => game.IAction
  getWordOfTheDay?: () => game.IAction
  checkWordRequest?: (word: string) => game.IAction
  enterWord?: (currentLine: number, word: string) => game.IAction
  deleteWord?: (currentLine: number) => game.IAction
}

export type IWordOfTheDayTypesProps = IDispatchToProps & IStateToProps
