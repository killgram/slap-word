import AboutAppScreen from './AboutAppScreen'

import { connect } from 'react-redux'
import { IState, IAboutAppScreenTypesProps } from './AboutAppScreenTypes'
import { Dispatch } from 'redux'

/**
 * @param {IState} state
 * @return {IAboutAppScreenTypesProps}
 */
const mapStateToProps = (state: IState): IAboutAppScreenTypesProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IAboutAppScreenTypesProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): IAboutAppScreenTypesProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AboutAppScreen)
