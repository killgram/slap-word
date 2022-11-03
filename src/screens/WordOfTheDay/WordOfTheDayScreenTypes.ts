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
}

export interface IState {
  game?: game.IInitialState
}

interface IDispatchToProps {
  closeGame?: () => game.IAction
  getWordOfTheDay?: () => game.IAction
  checkWordRequest?: (word: string) => game.IAction
}

export type IWordOfTheDayTypesProps = IDispatchToProps & IStateToProps
