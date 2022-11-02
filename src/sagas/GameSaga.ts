import { call, put, select } from 'redux-saga/effects'
import { gameAction, settingsAction } from '@store/actions'
import { checkWordService, getWordOfDayService } from '@services'
import { errorToast, generateKeyboardConfig } from '@utils'
import { ICheckWordRequest } from '@store/types/game/Interfaces'
import { Navigate } from '@navigators'

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

/**
 * @description check word saga
 */
export function* checkWordRequest(action: ICheckWordRequest): any {
  const { word } = action
  const state = yield select()
  const accessToken = state?.app?.accessToken

  try {
    const data = yield call(checkWordService, accessToken, word!)
    if (data.data) {
      yield put(gameAction.onCheckWordSuccess(true))
    } else {
      yield put(gameAction.onCheckWordSuccess(false))
    }
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}

/**
 * @description close game saga
 */
export function* closeGame(): any {
  try {
    yield put(settingsAction.updateWordOfDayLastTime())
    yield put(gameAction.cleanGame())
    yield call(Navigate.toAppStack)
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}
