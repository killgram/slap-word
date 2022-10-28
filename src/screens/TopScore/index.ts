import TopScoreScreen from './TopScoreScreen'

import { connect } from 'react-redux'
import { IState, ITopScoreScreenTypesProps } from './TopScoreScreenTypes'
import { Dispatch } from 'redux'

/**
 * @param {IState} state
 * @return {ITopScoreScreenTypesProps}
 */
const mapStateToProps = (state: IState): ITopScoreScreenTypesProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ITopScoreScreenTypesProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): ITopScoreScreenTypesProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TopScoreScreen)
