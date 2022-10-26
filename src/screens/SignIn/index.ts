import SignIn from './SignIn'

import { connect } from 'react-redux'
import { IState, ISignInScreenTypesProps } from './SignInTypes'
import { Dispatch } from 'redux'
import { appAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {ISignInScreenTypesProps}
 */
const mapStateToProps = (state: IState): ISignInScreenTypesProps => ({
  isLoading: state?.app?.isLoading,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ISignInScreenTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): ISignInScreenTypesProps => ({
  login: (login: string, password: string) =>
    dispatch(appAction.loginRequest(login, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
