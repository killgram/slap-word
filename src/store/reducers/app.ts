import { app } from '@store/types'

const initialState: app.IInitialState = {}

/**
 *
 * @param {app.IInitialState} state
 * @param {app.IAction} action
 * @return {app.IInitialState}
 */
const appReducer = (
  state: app.IInitialState = initialState,
  action: app.IAction,
): app.IInitialState => {
  switch (action.type) {
    case app.ActionTypes.CLEAN_APP: {
      const oldState = { ...state }
      return {
        serverIsReady: oldState.serverIsReady,
      }
    }
    case app.ActionTypes.SERVER_IS_READY: {
      return {
        ...state,
        serverIsReady: true,
      }
    }
    // auth
    case app.ActionTypes.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case app.ActionTypes.LOGIN_SUCCESS: {
      const oldState = { ...state }
      delete oldState.isLoading
      return {
        ...oldState,
        login: action.login,
        password: action.password,
        accessToken: action.accessToken,
        maxScore: action.maxScore,
        isAuthorized: true,
      }
    }
    case app.ActionTypes.LOGIN_ERROR: {
      const oldState = { ...state }
      delete oldState.isLoading
      return {
        ...oldState,
      }
    }
    case app.ActionTypes.SIGN_UP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case app.ActionTypes.UPDATE_MAX_SCORE: {
      return {
        ...state,
        maxScore: action.maxScore,
      }
    }

    default: {
      return state
    }
  }
}

export default appReducer
