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

    default: {
      return state
    }
  }
}

export default settingsReducer
