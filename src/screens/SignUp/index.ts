import SignUp from './SignUp'

import { connect } from 'react-redux'
import { IState, ISignUpScreenTypesProps } from './SignUpTypes'
import { Dispatch } from 'redux'

/**
 * @param {IState} state
 * @return {ISignUpScreenTypesProps}
 */
const mapStateToProps = (state: IState): ISignUpScreenTypesProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ISignUpScreenTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): ISignUpScreenTypesProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
