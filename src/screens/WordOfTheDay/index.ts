import WordOfTheDayScreen from './WordOfTheDayScreen'

import { connect } from 'react-redux'
import { IState, IWordOfTheDayTypesProps } from './WordOfTheDayScreenTypes'
import { Dispatch } from 'redux'
import { settingsAction, gameAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IWordOfTheDayTypesProps}
 */
const mapStateToProps = (state: IState): IWordOfTheDayTypesProps => ({
  keyboardWords: state?.game?.keyboardWords,
  isLoading: state?.game?.isLoading,
  hitWord: state?.game?.word,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IWordOfTheDayTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IWordOfTheDayTypesProps => ({
  updateWordOfDayLastTime: () =>
    dispatch(settingsAction.updateWordOfDayLastTime()),
  getWordOfTheDay: () => dispatch(gameAction.getWordOfTheDay()),
  checkWordRequest: (word: string) =>
    dispatch(gameAction.checkWordRequest(word)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WordOfTheDayScreen)
