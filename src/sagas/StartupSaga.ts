import { call, put, select, delay } from 'redux-saga/effects'
import SplashScreen from 'react-native-splash-screen'
import { getServerWorkStatus } from '@services'
import { Navigate } from '@navigators'
import { appAction } from '@store/actions'

/**
 * @description startup saga
 */
export function* startup(): any {
  const state = yield select()
  const isAuthorized = state?.app?.isAuthorized
  const serverStatus = yield call(getServerWorkStatus)
  yield call(SplashScreen.hide)

  if (serverStatus.data.success) {
    if (isAuthorized) {
      yield call(Navigate.toAppStack)
    } else {
      yield call(Navigate.toAuthStack)
    }
    yield put(appAction.serverIsReady())
  }
}
