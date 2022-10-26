import { app } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
}

export interface IState {}

interface IDispatchToProps {}

export type IMainMenuScreenTypesProps = IDispatchToProps & IStateToProps
