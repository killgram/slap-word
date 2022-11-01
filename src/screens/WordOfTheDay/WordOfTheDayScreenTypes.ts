import { NavigationType } from '@navigators'
import { settings } from '@store/types'

interface IStateToProps {
  navigation?: NavigationType
}

export interface IState {}

interface IDispatchToProps {
  updateWordOfDayLastTime?: () => settings.IAction
}

export type IWordOfTheDayTypesProps = IDispatchToProps & IStateToProps
