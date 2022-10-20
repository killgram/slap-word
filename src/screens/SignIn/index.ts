import SignIn from './SignIn'

import { connect } from 'react-redux'
import { IState, ISignInScreenTypesProps } from './SignInTypes'
import { Dispatch } from 'redux'

/**
 * @param {IState} state
 * @return {ISignInScreenTypesProps}
 */
const mapStateToProps = (state: IState): ISignInScreenTypesProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ISignInScreenTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): ISignInScreenTypesProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
