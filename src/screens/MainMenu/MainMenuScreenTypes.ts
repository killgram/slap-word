import { app, settings } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  isPlaySound?: boolean
}

export interface IState {
  settings?: settings.IInitialState
}

interface IDispatchToProps {
  logout?: () => app.IAction
  setSoundtrackStatus?: (isPlaySound: boolean) => settings.IAction
}

export type IMainMenuScreenTypesProps = IDispatchToProps & IStateToProps
