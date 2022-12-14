import WordOfTheDayScreen from './WordOfTheDayScreen'

import { connect } from 'react-redux'
import { IState, IWordOfTheDayTypesProps } from './WordOfTheDayScreenTypes'
import { Dispatch } from 'redux'
import { gameAction, settingsAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IWordOfTheDayTypesProps}
 */
const mapStateToProps = (state: IState): IWordOfTheDayTypesProps => ({
  keyboardWords: state?.game?.keyboardWords,
  isLoading: state?.game?.isLoading,
  hitWord: state?.game?.word,
  isHit: state?.game?.isHit,
  isCheckLoading: state?.game?.isCheckLoading,
  wordLength: state?.game?.wordLength,
  tableWords: state?.game?.tableWords,
  currentLine: state?.game?.currentLine,
  isPostLoading: state?.settings?.isPostLoading,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IWordOfTheDayTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IWordOfTheDayTypesProps => ({
  closeGame: (isDone?: boolean) => dispatch(gameAction.closeGame(isDone)),
  getWordOfTheDay: () => dispatch(gameAction.getWordOfTheDay()),
  checkWordRequest: (word: string) =>
    dispatch(gameAction.checkWordRequest(word)),
  enterWord: (currentLine: number, word: string) =>
    dispatch(gameAction.enterWord(currentLine, word)),
  deleteWord: (currentLine: number) =>
    dispatch(gameAction.deleteWord(currentLine)),
  wrongWordRequest: (word: string) =>
    dispatch(settingsAction.wrongWordRequest(word)),
  renderedTableLine: (currentLine: number) =>
    dispatch(gameAction.renderedTableLine(currentLine)),
  getWordRequest: (length: string) =>
    dispatch(gameAction.getWordRequest(length)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WordOfTheDayScreen)
