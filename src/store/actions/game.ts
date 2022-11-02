import { game } from '@store/types'
import { IKeyboardLine } from '@store/types/game/Interfaces'

/**
 *
 * @return {game.IAction}
 */
export function cleanGame(): game.IAction {
  return {
    type: game.ActionTypes.CLEAN_GAME,
  }
}

/**
 * @return {game.IAction}
 */
export function getWordOfTheDay(): game.IAction {
  return {
    type: game.ActionTypes.GET_WORD_OF_THE_DAY,
  }
}

/**
 * @param {string} word
 * @return {game.IAction}
 */
export function onWordOfTheDaySuccess(word: string): game.IAction {
  return {
    type: game.ActionTypes.ON_WORD_OF_THE_DAY_SUCCESS,
    word,
  }
}

/**
 * @param {IKeyboardLine} keyboardWords
 * @return {game.IAction}
 */
export function setKeyboard(keyboardWords: IKeyboardLine): game.IAction {
  return {
    type: game.ActionTypes.SET_KEYBOARD,
    keyboardWords,
  }
}

/**
 * @param {string} word
 * @return {game.IAction}
 */
export function checkWordRequest(word: string): game.IAction {
  return {
    type: game.ActionTypes.CHECK_WORD_REQUEST,
    word,
  }
}

/**
 * @param {boolean} isHit
 * @return {game.IAction}
 */
export function onCheckWordSuccess(isHit: boolean): game.IAction {
  return {
    type: game.ActionTypes.ON_CHECK_WORD_SUCCESS,
    isHit,
  }
}
