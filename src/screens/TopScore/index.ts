import TopScoreScreen from './TopScoreScreen'

import { connect } from 'react-redux'
import { IState, ITopScoreScreenTypesProps } from './TopScoreScreenTypes'
import { Dispatch } from 'redux'
import { topScoreAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {ITopScoreScreenTypesProps}
 */
const mapStateToProps = (state: IState): ITopScoreScreenTypesProps => ({
  maxScore: state?.app?.maxScore,
  list: state?.topScore?.list,
  isLoading: state?.topScore?.isLoading,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ITopScoreScreenTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): ITopScoreScreenTypesProps => ({
  getTopScore: () => dispatch(topScoreAction.getTopScore()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopScoreScreen)
