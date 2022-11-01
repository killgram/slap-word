import WordOfTheDayScreen from './WordOfTheDayScreen'

import { connect } from 'react-redux'
import { IState, IWordOfTheDayTypesProps } from './WordOfTheDayScreenTypes'
import { Dispatch } from 'redux'
import { settingsAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IWordOfTheDayTypesProps}
 */
const mapStateToProps = (state: IState): IWordOfTheDayTypesProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IWordOfTheDayTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IWordOfTheDayTypesProps => ({
  updateWordOfDayLastTime: () =>
    dispatch(settingsAction.updateWordOfDayLastTime()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WordOfTheDayScreen)
