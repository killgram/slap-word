import TournamentScreen from './TournamentScreen'

import { connect } from 'react-redux'
import { IState, ITournamentScreenTypesProps } from './TournamentScreenTypes'
import { Dispatch } from 'redux'

/**
 * @param {IState} state
 * @return {ITournamentScreenTypesProps}
 */
const mapStateToProps = (state: IState): ITournamentScreenTypesProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ITournamentScreenTypesProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): ITournamentScreenTypesProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TournamentScreen)
