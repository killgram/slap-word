import { NavigationType } from '@navigators'
import { support } from '@store/types'
import { ISupportData } from '@store/types/support/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  isLoading?: boolean
  email?: string
  helpData?: ISupportData
  isHelpLoading?: boolean
}

export interface IState {
  support?: support.IInitialState
}

interface IDispatchToProps {
  getSupport?: () => support.IAction
}

export type ISupportScreenTypesProps = IDispatchToProps & IStateToProps
