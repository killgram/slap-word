import GameChooseScreen from './GameChooseScreen'

import { connect } from 'react-redux'
import { IState, IGameChooseScreenTypesProps } from './GameChooseScreenTypes'
import { Dispatch } from 'redux'

/**
 * @param {IState} state
 * @return {IGameChooseScreenTypesProps}
 */
const mapStateToProps = (state: IState): IGameChooseScreenTypesProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IGameChooseScreenTypesProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): IGameChooseScreenTypesProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(GameChooseScreen)
