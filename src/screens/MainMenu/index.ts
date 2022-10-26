import MainMenuScreen from './MainMenuScreen'

import { connect } from 'react-redux'
import { IState, IMainMenuScreenTypesProps } from './MainMenuScreenTypes'
import { Dispatch } from 'redux'

/**
 * @param {IState} state
 * @return {IMainMenuScreenTypesProps}
 */
const mapStateToProps = (state: IState): IMainMenuScreenTypesProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IMainMenuScreenTypesProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): IMainMenuScreenTypesProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuScreen)
