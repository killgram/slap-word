import { call, put, select } from 'redux-saga/effects'
import { supportAction } from '@store/actions'

import { dbSupportInfoData, getSupportService } from '@services'
import { errorToast } from '@utils'

/**
 * @description get support saga
 */
export function* getSupport(): any {
  const state = yield select()
  const accessToken = state?.app?.accessToken

  try {
    const data = yield call(getSupportService, accessToken)
    yield put(supportAction.onSupportSuccess(data.data[0].email))
    const helpResult = yield call(dbSupportInfoData)
    yield put(supportAction.onGetR3D3InfoSuccess(helpResult.data.data.helpData))
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}
