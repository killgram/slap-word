import { game } from '@store/types'

const initialState: game.IInitialState = {}

/**
 *
 * @param {game.IInitialState} state
 * @param {game.IAction} action
 * @return {game.IInitialState}
 */
const gameReducer = (
  state: game.IInitialState = initialState,
  action: game.IAction,
): game.IInitialState => {
  switch (action.type) {
    case game.ActionTypes.CLEAN_GAME: {
      return {}
    }
    case game.ActionTypes.GET_WORD_OF_THE_DAY: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case game.ActionTypes.ON_WORD_OF_THE_DAY_SUCCESS: {
      const oldState = { ...state }
      delete oldState.isLoading
      return {
        ...oldState,
        word: action.word,
      }
    }
    // keyboard
    case game.ActionTypes.SET_KEYBOARD: {
      return {
        ...state,
        keyboardWords: action.keyboardWords,
      }
    }
    // check word
    case game.ActionTypes.CHECK_WORD_REQUEST: {
      const oldState = { ...state }
      delete oldState.isHit
      return {
        ...oldState,
        isCheckLoading: true,
      }
    }
    case game.ActionTypes.ON_CHECK_WORD_SUCCESS: {
      const oldState = { ...state }
      delete oldState.isCheckLoading
      return {
        ...oldState,
        isHit: action.isHit,
      }
    }

    default: {
      return state
    }
  }
}

export default gameReducer
