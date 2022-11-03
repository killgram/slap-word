import { call, put, select } from 'redux-saga/effects'
import { IWrongWordRequest } from '@store/types/settings/Interfaces'
import { errorToast, successToast } from '@utils'
import { postWrongWordService } from '@services'
import { settingsAction } from '@store/actions'

/**
 * @description post wrong word saga
 */
export function* wrongWordRequest(action: IWrongWordRequest): any {
  const { word } = action
  const state = yield select()
  const accessToken = state?.app?.accessToken
  try {
    const data = yield call(postWrongWordService, accessToken, word!)
    if (data?.data?.success) {
      yield put(settingsAction.onWrongWordSuccess())
      yield call(successToast, 'Спасибо за помошь 🙏')
    } else {
      yield call(errorToast, 'Что-то пошло не так 😔')
    }
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}
