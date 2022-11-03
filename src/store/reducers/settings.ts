import { settings } from '@store/types'

const initialState: settings.IInitialState = {}

/**
 *
 * @param {settings.IInitialState} state
 * @param {settings.IAction} action
 * @return {settings.IInitialState}
 */
const settingsReducer = (
  state: settings.IInitialState = initialState,
  action: settings.IAction,
): settings.IInitialState => {
  switch (action.type) {
    case settings.ActionTypes.CLEAN_SETTING: {
      return {}
    }
    case settings.ActionTypes.SET_SOUNDTRACK_STATUS: {
      return {
        ...state,
        isPlaySound: action.isPlaySound,
      }
    }
    case settings.ActionTypes.UPDATE_WORD_OF_DAY_LAST_TIME: {
      return {
        ...state,
        wordOfDayTime: Date.now(),
      }
    }
    // wrong word
    case settings.ActionTypes.WRONG_WORD_REQUEST: {
      return {
        ...state,
        isPostLoading: true,
      }
    }
    case settings.ActionTypes.ON_WRONG_WORD_SUCCESS: {
      const oldState = { ...state }
      delete oldState.isPostLoading
      return {
        ...oldState,
      }
    }

    default: {
      return state
    }
  }
}

export default settingsReducer
