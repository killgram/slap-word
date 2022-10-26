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
      return {}
    }
    case app.ActionTypes.SERVER_IS_READY: {
      return {
        ...state,
        serverIsReady: true,
      }
    }

    default: {
      return state
    }
  }
}

export default appReducer
