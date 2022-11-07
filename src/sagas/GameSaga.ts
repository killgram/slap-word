import { call, put, select } from 'redux-saga/effects'
import { gameAction, settingsAction } from '@store/actions'
import { checkWordService, getWordOfDayService } from '@services'
import {
  errorToast,
  generateKeyboardConfig,
  generateTableConfig,
  playWrongSound,
  updateKeyboardConfig,
  updateTableConfig,
} from '@utils'
import { ICheckWordRequest, ICloseGame } from '@store/types/game/Interfaces'
import { Navigate } from '@navigators'
import { GameConfig } from '@configurations'

/**
 * @description get word of the day saga
 */
export function* getWordOfTheDay(): any {
  const state = yield select()
  const accessToken = state?.app?.accessToken

  try {
    const data = yield call(getWordOfDayService, accessToken)
    yield call(setKeyboard)
    yield put(gameAction.updateCurrentLine(0))
    yield call(setupGameConfig, GameConfig.WORD_OF_THE_DAY_LENGTH)
    yield put(gameAction.onWordOfTheDaySuccess(data.data.word))
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}

/**
 * @description setup game config saga
 */
export function* setupGameConfig(wordLength: number): any {
  try {
    const config = generateTableConfig(wordLength)
    yield put(gameAction.setupGameConfig(wordLength, config))
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}

/**
 * @description set keyboard settings saga
 */
export function* setKeyboard(): any {
  try {
    const config = generateKeyboardConfig()
    yield put(gameAction.setKeyboard(config))
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}

/**
 * @description check word saga
 */
export function* checkWordRequest(action: ICheckWordRequest): any {
  const { word } = action
  const state = yield select()
  const accessToken = state?.app?.accessToken
  const currentLine = state?.game?.currentLine
  const hitWord = state?.game?.word
  const keyboardWords = state?.game?.keyboardWords
  const tableWords = state?.game?.tableWords

  try {
    const data = yield call(checkWordService, accessToken, word!)
    if (data.data) {
      const newKeyboardConfig = yield call(
        updateKeyboardConfig,
        word!,
        hitWord,
        keyboardWords,
      )
      const newTableConfig = yield call(
        updateTableConfig,
        word!,
        hitWord,
        tableWords,
      )
      yield put(gameAction.setKeyboard(newKeyboardConfig))
      yield put(gameAction.setupGameConfig(hitWord.length, newTableConfig))
      if (hitWord === word) {
        yield put(gameAction.onCheckWordSuccess(true))
      } else {
        yield put(gameAction.checkWordError())
      }
      yield put(gameAction.updateCurrentLine(currentLine + 1))
    } else {
      yield put(gameAction.checkWordError())
      yield call(errorToast, 'Слово не найдено 💩')
      yield call(playWrongSound)
    }
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}

/**
 * @description close game saga
 */
export function* closeGame(action: ICloseGame): any {
  const { isDone } = action
  try {
    if (isDone) {
      yield put(settingsAction.updateWordOfDayLastTime())
    }
    yield put(gameAction.cleanGame())
    yield call(Navigate.toAppStack)
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}
