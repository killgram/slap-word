import SignUp from './SignUp'

import { connect } from 'react-redux'
import { IState, ISignUpScreenTypesProps } from './SignUpTypes'
import { Dispatch } from 'redux'
import { appAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {ISignUpScreenTypesProps}
 */
const mapStateToProps = (state: IState): ISignUpScreenTypesProps => ({
  isLoading: state?.app?.isLoading,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ISignUpScreenTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): ISignUpScreenTypesProps => ({
  signUpRequest: (login: string, password: string) =>
    dispatch(appAction.signUpRequest(login, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
