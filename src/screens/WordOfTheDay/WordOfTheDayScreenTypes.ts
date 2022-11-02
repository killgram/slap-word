import { NavigationType } from '@navigators'
import { settings, game } from '@store/types'
import { IKeyboardLine } from '@store/types/game/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  keyboardWords?: IKeyboardLine
  isLoading?: boolean
  hitWord?: string
}

export interface IState {
  game?: game.IInitialState
}

interface IDispatchToProps {
  updateWordOfDayLastTime?: () => settings.IAction
  getWordOfTheDay?: () => game.IAction
}

export type IWordOfTheDayTypesProps = IDispatchToProps & IStateToProps
