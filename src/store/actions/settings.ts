import { settings } from '@store/types'

/**
 * @param {boolean} isPlaySound
 * @return {settings.IAction}
 */
export function setSoundtrackStatus(isPlaySound: boolean): settings.IAction {
  return {
    type: settings.ActionTypes.SET_SOUNDTRACK_STATUS,
    isPlaySound,
  }
}

/**
 *
 * @return {settings.IAction}
 */
export function cleanSettings(): settings.IAction {
  return {
    type: settings.ActionTypes.CLEAN_SETTING,
  }
}
