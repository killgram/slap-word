import { app } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
}

export interface IState {}

interface IDispatchToProps {
  logout?: () => app.IAction
}

export type IMainMenuScreenTypesProps = IDispatchToProps & IStateToProps
