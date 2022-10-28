import MainMenuScreen from './MainMenuScreen'

import { connect } from 'react-redux'
import { IState, IMainMenuScreenTypesProps } from './MainMenuScreenTypes'
import { Dispatch } from 'redux'
import { appAction, settingsAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IMainMenuScreenTypesProps}
 */
const mapStateToProps = (state: IState): IMainMenuScreenTypesProps => ({
  isPlaySound: state?.settings?.isPlaySound,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IMainMenuScreenTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IMainMenuScreenTypesProps => ({
  logout: () => dispatch(appAction.logout()),
  setSoundtrackStatus: (isPlaySound: boolean) =>
    dispatch(settingsAction.setSoundtrackStatus(isPlaySound)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuScreen)
