import SupportScreen from './SupportScreen'

import { connect } from 'react-redux'
import { IState, ISupportScreenTypesProps } from './SupportScreenTypes'
import { Dispatch } from 'redux'

/**
 * @param {IState} state
 * @return {ISupportScreenTypesProps}
 */
const mapStateToProps = (state: IState): ISupportScreenTypesProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ISupportScreenTypesProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): ISupportScreenTypesProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SupportScreen)
