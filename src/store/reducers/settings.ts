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

    default: {
      return state
    }
  }
}

export default settingsReducer
