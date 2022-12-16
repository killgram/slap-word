import { call, put } from 'redux-saga/effects'
import { supportAction } from '@store/actions'
import { dbSupportInfoData, getSupportService } from '@services'
import { errorToast } from '@utils'

/**
 * @description get support saga
 */
export function* getSupport(): any {
  try {
    const data = yield call(getSupportService)
    yield put(supportAction.onSupportSuccess(data.email))
    const helpResult = yield call(dbSupportInfoData)
    yield put(supportAction.onGetR3D3InfoSuccess(helpResult.data.data.helpData))
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}
