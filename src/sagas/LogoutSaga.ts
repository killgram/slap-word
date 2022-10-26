import { call, put } from 'redux-saga/effects'
import { appAction } from '@store/actions'
import { Navigate } from '@navigators'

/**
 * @description logout saga
 */
export function* logout(): any {
  yield put(appAction.cleanApp())

  yield call(Navigate.toAuthStack)
}
