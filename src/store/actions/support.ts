import { support } from '@store/types'
import { ISupportData } from '@store/types/support/Interfaces'

/**
 *
 * @return {support.IAction}
 */
export function cleanSupport(): support.IAction {
  return {
    type: support.ActionTypes.CLEAN_SUPPORT,
  }
}

/**
 * @return {support.IAction}
 */
export function getSupport(): support.IAction {
  return {
    type: support.ActionTypes.GET_SUPPORT,
  }
}

/**
 * @param {string} email
 * @return {support.IAction}
 */
export function onSupportSuccess(email: string): support.IAction {
  return {
    type: support.ActionTypes.ON_SUPPORT_SUCCESS,
    email,
  }
}

/**
 * @param {ISupportData} helpData
 * @return {support.IAction}
 */
export function onGetR3D3InfoSuccess(helpData: ISupportData): support.IAction {
  return {
    type: support.ActionTypes.ON_GET_R3D3_INFO_SUCCESS,
    helpData,
  }
}
