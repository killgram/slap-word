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
    // game config
    case game.ActionTypes.SETUP_GAME_CONFIG: {
      return {
        ...state,
        wordLength: action.wordLength,
        tableWords: action.tableWords,
        currentLine: 0,
      }
    }
    // update current line
    case game.ActionTypes.UPDATE_CURRENT_LINE: {
      return {
        ...state,
        currentLine: action.currentLine,
      }
    }
    // enter word
    case game.ActionTypes.ENTER_WORD: {
      const { currentLine, word } = action
      const oldState = { ...state }
      const oldTableWords = { ...state.tableWords }
      const enterPosition = oldTableWords[currentLine!].find((item) => {
        return item.name.length === 0
      })
      if (enterPosition) {
        enterPosition.name = word!
      }
      return {
        ...oldState,
      }
    }
    // delete word
    case game.ActionTypes.DELETE_WORD: {
      const { currentLine } = action
      const oldState = { ...state }
      const oldTableWords = { ...state.tableWords }[currentLine!].reverse()
      const enterPosition = oldTableWords.find((item) => {
        return item.name.length !== 0
      })
      if (enterPosition) {
        enterPosition.name = ''
        oldTableWords.reverse()
      }
      return {
        ...oldState,
      }
    }

    default: {
      return state
    }
  }
}

export default gameReducer
