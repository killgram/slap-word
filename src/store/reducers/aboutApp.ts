import { aboutApp } from '@store/types'

const initialState: aboutApp.IInitialState = {}

/**
 *
 * @param {aboutApp.IInitialState} state
 * @param {aboutApp.IAction} action
 * @return {aboutApp.IInitialState}
 */
const aboutAppReducer = (
  state: aboutApp.IInitialState = initialState,
  action: aboutApp.IAction,
): aboutApp.IInitialState => {
  switch (action.type) {
    case aboutApp.ActionTypes.CLEAN_ABOUT_APP: {
      return {}
    }
    case aboutApp.ActionTypes.GET_ABOUT_APP: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case aboutApp.ActionTypes.ON_ABOUT_APP_SUCCESS: {
      const oldState = { ...state }
      delete oldState.isLoading
      return {
        ...oldState,
        appGit: action.appGit,
        authorGit: action.authorGit,
        author: action.author,
        name: action.name,
        appVersion: action.appVersion,
      }
    }

    default: {
      return state
    }
  }
}

export default aboutAppReducer
