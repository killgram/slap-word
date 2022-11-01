import { NavigationType } from '@navigators'
import { aboutApp } from '@store/types'

interface IStateToProps {
  navigation?: NavigationType
  isLoading?: boolean
  aboutApp?: aboutApp.IInitialState
}

export interface IState {
  aboutApp?: aboutApp.IInitialState
}

interface IDispatchToProps {
  getAboutApp?: () => aboutApp.IAction
}

export type IAboutAppScreenTypesProps = IDispatchToProps & IStateToProps
