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

/**
 * @return {settings.IAction}
 */
export function updateWordOfDayLastTime(): settings.IAction {
  return {
    type: settings.ActionTypes.UPDATE_WORD_OF_DAY_LAST_TIME,
  }
}

/**
 * @param {string} word
 * @return {settings.IAction}
 */
export function wrongWordRequest(word: string): settings.IAction {
  return {
    type: settings.ActionTypes.WRONG_WORD_REQUEST,
    word,
  }
}

/**
 * @return {settings.IAction}
 */
export function onWrongWordSuccess(): settings.IAction {
  return {
    type: settings.ActionTypes.ON_WRONG_WORD_SUCCESS,
  }
}
