import AboutAppScreen from './AboutAppScreen'

import { connect } from 'react-redux'
import { IState, IAboutAppScreenTypesProps } from './AboutAppScreenTypes'
import { Dispatch } from 'redux'
import { aboutAppAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IAboutAppScreenTypesProps}
 */
const mapStateToProps = (state: IState): IAboutAppScreenTypesProps => ({
  isLoading: state?.aboutApp?.isLoading,
  aboutApp: state?.aboutApp,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IAboutAppScreenTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IAboutAppScreenTypesProps => ({
  getAboutApp: () => dispatch(aboutAppAction.getAboutApp()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutAppScreen)
