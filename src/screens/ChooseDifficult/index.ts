import ChooseDifficultScreen from './ChooseDifficultScreen'

import { connect } from 'react-redux'
import {
  IState,
  IChooseDifficultTypesProps,
} from './ChooseDifficultScreenTypes'
import { Dispatch } from 'redux'

/**
 * @param {IState} state
 * @return {IChooseDifficultTypesProps}
 */
const mapStateToProps = (state: IState): IChooseDifficultTypesProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IChooseDifficultTypesProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): IChooseDifficultTypesProps => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseDifficultScreen)
