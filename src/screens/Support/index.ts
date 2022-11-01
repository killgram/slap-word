import SupportScreen from './SupportScreen'

import { connect } from 'react-redux'
import { IState, ISupportScreenTypesProps } from './SupportScreenTypes'
import { Dispatch } from 'redux'
import { supportAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {ISupportScreenTypesProps}
 */
const mapStateToProps = (state: IState): ISupportScreenTypesProps => ({
  isLoading: state?.support?.isLoading,
  email: state?.support?.email,
  helpData: state?.support?.helpData,
  isHelpLoading: state?.support?.isHelpLoading,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ISupportScreenTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): ISupportScreenTypesProps => ({
  getSupport: () => dispatch(supportAction.getSupport()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SupportScreen)
