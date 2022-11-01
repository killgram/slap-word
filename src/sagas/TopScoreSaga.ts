import { call, put, select } from 'redux-saga/effects'
import { topScoreAction } from '@store/actions'
import { getTopScoreService } from '@services'
import { errorToast } from '@utils'

/**
 * @description get top score saga
 */
export function* getTopScore(): any {
  const state = yield select()
  const accessToken = state?.app?.accessToken

  try {
    const data = yield call(getTopScoreService, accessToken)
    yield put(topScoreAction.onTopScoreSuccess(data.data.list))
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}
