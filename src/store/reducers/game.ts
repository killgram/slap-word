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
    case game.ActionTypes.CHECK_WORD_ERROR: {
      const oldState = { ...state }
      delete oldState.isCheckLoading
      return {
        ...oldState,
      }
    }
    // game config
    case game.ActionTypes.SETUP_GAME_CONFIG: {
      return {
        ...state,
        wordLength: action.wordLength,
        tableWords: action.tableWords,
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
      const oldTableWords = JSON.parse(JSON.stringify({ ...state.tableWords }))
      const enterPosition = oldTableWords[currentLine!].find((item) => {
        return item.name.length === 0
      })
      if (enterPosition) {
        enterPosition.name = word!
      }
      oldState.tableWords = oldTableWords
      return {
        ...oldState,
      }
    }
    // delete word
    case game.ActionTypes.DELETE_WORD: {
      const { currentLine } = action
      const oldState = { ...state }
      const oldTableWords = JSON.parse(JSON.stringify({ ...state.tableWords }))

      const newTableWords = oldTableWords[currentLine!].reverse()
      const enterPosition = newTableWords.find((item) => {
        return item.name.length !== 0
      })
      if (enterPosition) {
        enterPosition.name = ''
        newTableWords.reverse()
      }
      oldState.tableWords = oldTableWords
      return {
        ...oldState,
      }
    }
    // set rendered table item
    case game.ActionTypes.RENDERED_TABLE_LINE: {
      const { currentLine } = action
      const oldState = { ...state }
      const oldTableWords = JSON.parse(JSON.stringify({ ...state.tableWords }))
      const enterPosition = oldTableWords[currentLine!]

      enterPosition?.forEach((item) => {
        item.isRendered = true
      })
      oldState.tableWords = oldTableWords
      return {
        ...oldState,
      }
    }
    // get word
    case game.ActionTypes.GET_WORD_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case game.ActionTypes.ON_GET_WORD_SUCCESS: {
      const oldState = { ...state }
      delete oldState.isLoading
      return {
        ...oldState,
        word: action.word,
      }
    }

    default: {
      return state
    }
  }
}

export default gameReducer
