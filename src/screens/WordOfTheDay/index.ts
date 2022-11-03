import WordOfTheDayScreen from './WordOfTheDayScreen'

import { connect } from 'react-redux'
import { IState, IWordOfTheDayTypesProps } from './WordOfTheDayScreenTypes'
import { Dispatch } from 'redux'
import { gameAction } from '@store/actions'

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
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IWordOfTheDayTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IWordOfTheDayTypesProps => ({
  closeGame: () => dispatch(gameAction.closeGame()),
  getWordOfTheDay: () => dispatch(gameAction.getWordOfTheDay()),
  checkWordRequest: (word: string) =>
    dispatch(gameAction.checkWordRequest(word)),
  updateCurrentLine: (currentLine: number) =>
    dispatch(gameAction.updateCurrentLine(currentLine)),
  enterWord: (currentLine: number, word: string) =>
    dispatch(gameAction.enterWord(currentLine, word)),
  deleteWord: (currentLine: number) =>
    dispatch(gameAction.deleteWord(currentLine)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WordOfTheDayScreen)
