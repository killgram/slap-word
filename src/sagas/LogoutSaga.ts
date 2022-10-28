import { call, put } from 'redux-saga/effects'
import { appAction, settingsAction } from '@store/actions'
import { Navigate } from '@navigators'

/**
 * @description logout saga
 */
export function* logout(): any {
  yield put(appAction.cleanApp())
  yield put(settingsAction.cleanSettings())

  yield call(Navigate.toAuthStack)
}
