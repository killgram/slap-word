import { call, put } from 'redux-saga/effects'
import {
  appAction,
  settingsAction,
  supportAction,
  aboutAppAction,
  topScoreAction,
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
  yield put(topScoreAction.cleanTopScore())

  yield call(Navigate.toAuthStack)
}
