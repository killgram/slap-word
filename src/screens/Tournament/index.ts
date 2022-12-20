import TournamentScreen from './TournamentScreen'

import { connect } from 'react-redux'
import { IState, ITournamentScreenTypesProps } from './TournamentScreenTypes'
import { Dispatch } from 'redux'
import { gameAction, settingsAction, tournamentAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {ITournamentScreenTypesProps}
 */
const mapStateToProps = (state: IState): ITournamentScreenTypesProps => ({
  keyboardWords: state?.game?.keyboardWords,
  isLoading: state?.game?.isLoading,
  hitWord: state?.game?.word,
  isHit: state?.game?.isHit,
  isCheckLoading: state?.game?.isCheckLoading,
  wordLength: state?.game?.wordLength,
  tableWords: state?.game?.tableWords,
  currentLine: state?.game?.currentLine,
  isPostLoading: state?.settings?.isPostLoading,
  score: state?.tournament?.score,
  round: state?.tournament?.round,
  wordLengthTournament: state?.tournament?.wordLength,
  isDone: state?.tournament?.isDone,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ITournamentScreenTypesProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): ITournamentScreenTypesProps => ({
  closeGame: (isDone?: boolean) => dispatch(gameAction.closeGame(isDone)),
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
  setTournamentConfig: (score: string, round: number, wordLength: string) =>
    dispatch(tournamentAction.setTournamentConfig(score, round, wordLength)),
  cleanTournament: () => dispatch(tournamentAction.cleanTournament()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TournamentScreen)
