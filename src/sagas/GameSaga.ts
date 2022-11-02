import { call, put, select } from 'redux-saga/effects'
import { gameAction } from '@store/actions'
import { getWordOfDayService } from '@services'
import { errorToast, generateKeyboardConfig } from '@utils'

/**
 * @description get word of the day saga
 */
export function* getWordOfTheDay(): any {
  const state = yield select()
  const accessToken = state?.app?.accessToken

  try {
    const data = yield call(getWordOfDayService, accessToken)
    yield call(setKeyboard)
    yield put(gameAction.onWordOfTheDaySuccess(data.data.word))
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
