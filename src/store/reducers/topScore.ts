import { topScore } from '@store/types'

const initialState: topScore.IInitialState = {}

/**
 *
 * @param {topScore.IInitialState} state
 * @param {topScore.IAction} action
 * @return {topScore.IInitialState}
 */
const topScoreReducer = (
  state: topScore.IInitialState = initialState,
  action: topScore.IAction,
): topScore.IInitialState => {
  switch (action.type) {
    case topScore.ActionTypes.CLEAN_TOP_SCORE: {
      return {}
    }
    case topScore.ActionTypes.GET_TOP_SCORE: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case topScore.ActionTypes.ON_TOP_SCORE_SUCCESS: {
      const oldState = { ...state }
      delete oldState.isLoading
      return {
        ...oldState,
        list: action.list,
        lastUpdate: Date.now(),
      }
    }

    default: {
      return state
    }
  }
}

export default topScoreReducer
