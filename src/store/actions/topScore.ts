import { topScore } from '@store/types'
import { ITopScoreList } from '@store/types/topScore/Interfaces'

/**
 *
 * @return {topScore.IAction}
 */
export function cleanTopScore(): topScore.IAction {
  return {
    type: topScore.ActionTypes.CLEAN_TOP_SCORE,
  }
}

/**
 * @return {topScore.IAction}
 */
export function getTopScore(): topScore.IAction {
  return {
    type: topScore.ActionTypes.GET_TOP_SCORE,
  }
}

/**
 * @param {Array<ITopScoreList>} list
 * @return {topScore.IAction}
 */
export function onTopScoreSuccess(
  list: Array<ITopScoreList>,
): topScore.IAction {
  return {
    type: topScore.ActionTypes.ON_TOP_SCORE_SUCCESS,
    list,
  }
}
