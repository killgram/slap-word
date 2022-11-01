import { support } from '@store/types'

const initialState: support.IInitialState = {}

/**
 *
 * @param {support.IInitialState} state
 * @param {support.IAction} action
 * @return {support.IInitialState}
 */
const supportReducer = (
  state: support.IInitialState = initialState,
  action: support.IAction,
): support.IInitialState => {
  switch (action.type) {
    case support.ActionTypes.CLEAN_SUPPORT: {
      return {}
    }
    case support.ActionTypes.GET_SUPPORT: {
      return {
        ...state,
        isLoading: true,
        isHelpLoading: true,
      }
    }
    case support.ActionTypes.ON_SUPPORT_SUCCESS: {
      const oldState = { ...state }
      delete oldState.isLoading
      return {
        ...oldState,
        email: action.email,
      }
    }
    case support.ActionTypes.ON_GET_R3D3_INFO_SUCCESS: {
      const oldState = { ...state }
      delete oldState.isHelpLoading
      return {
        ...oldState,
        helpData: action.helpData,
      }
    }

    default: {
      return state
    }
  }
}

export default supportReducer
