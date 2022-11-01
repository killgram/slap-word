import { settings } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  wordOfDayTime?: number
}

export interface IState {
  settings?: settings.IInitialState
}

export type IGameChooseScreenTypesProps = IStateToProps
