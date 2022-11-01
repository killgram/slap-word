import { call, put } from 'redux-saga/effects'
import {
  appAction,
  settingsAction,
  supportAction,
  aboutAppAction,
} from '@store/actions'
import { Navigate } from '@navigators'

/**
 * @description logout saga
 */
export function* logout(): any {
  yield put(appAction.cleanApp())
  yield put(settingsAction.cleanSettings())
  yield put(supportAction.cleanSupport())
  yield put(aboutAppAction.cleanAboutApp())

  yield call(Navigate.toAuthStack)
}
