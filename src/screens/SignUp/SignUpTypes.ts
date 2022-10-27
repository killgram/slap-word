import { app } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  isLoading?: boolean
}

export interface IState {
  app?: app.IInitialState
}

interface IDispatchToProps {
  signUpRequest?: (login: string, password: string) => app.IAction
}

export type ISignUpScreenTypesProps = IDispatchToProps & IStateToProps
