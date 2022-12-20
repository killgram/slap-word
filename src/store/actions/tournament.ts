import { tournament } from '@store/types'

/**
 * @param {string} score
 * @param {number} round
 * @param {string} wordLength
 * @return {tournament.IAction}
 */
export function setTournamentConfig(
  score: string,
  round: number,
  wordLength: string,
): tournament.IAction {
  return {
    type: tournament.ActionTypes.SET_TOURNAMENT_CONFIG,
    score,
    round,
    wordLength,
  }
}

/**
 *
 * @return {tournament.IAction}
 */
export function cleanTournament(): tournament.IAction {
  return {
    type: tournament.ActionTypes.CLEAN_TOURNAMENT,
  }
}

/**
 * @param {number} score
 * @return {tournament.IAction}
 */
export function updateScore(score: number): tournament.IAction {
  return {
    type: tournament.ActionTypes.UPDATE_SCORE,
    score,
  }
}

/**
 * @return {tournament.IAction}
 */
export function updateTournamentConfig(): tournament.IAction {
  return {
    type: tournament.ActionTypes.UPDATE_TOURNAMENT_CONFIG,
  }
}
