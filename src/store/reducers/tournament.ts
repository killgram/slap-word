import { tournament } from '@store/types'

const initialState: tournament.IInitialState = {}

/**
 *
 * @param {tournament.IInitialState} state
 * @param {tournament.IAction} action
 * @return {tournament.IInitialState}
 */
const tournamentReducer = (
  state: tournament.IInitialState = initialState,
  action: tournament.IAction,
): tournament.IInitialState => {
  switch (action.type) {
    case tournament.ActionTypes.CLEAN_TOURNAMENT: {
      return {}
    }
    case tournament.ActionTypes.SET_TOURNAMENT_CONFIG: {
      return {
        score: action.score,
        round: action.round,
        wordLength: action.wordLength,
      }
    }

    default: {
      return state
    }
  }
}

export default tournamentReducer
