import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
}

export interface IState {}

interface IDispatchToProps {}

export type IChooseDifficultTypesProps = IDispatchToProps & IStateToProps
