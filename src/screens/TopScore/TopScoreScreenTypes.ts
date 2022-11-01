import { topScore, app } from '@store/types'
import { NavigationType } from '@navigators'
import { ITopScoreList } from '@store/types/topScore/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  maxScore?: number
  list?: Array<ITopScoreList>
  isLoading?: boolean
}

export interface IState {
  app?: app.IInitialState
  topScore?: topScore.IInitialState
}

interface IDispatchToProps {
  getTopScore?: () => topScore.IAction
}

export type ITopScoreScreenTypesProps = IDispatchToProps & IStateToProps
