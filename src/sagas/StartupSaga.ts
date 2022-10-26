import { call, put, select, delay } from 'redux-saga/effects'
import SplashScreen from 'react-native-splash-screen'
import { getServerWorkStatus } from '@services'
import { Navigate } from '@navigators'
import { appAction } from '@store/actions'

/**
 * @description startup saga
 */
export function* startup(): any {
  const serverStatus = yield call(getServerWorkStatus)
  yield call(SplashScreen.hide)

  if (serverStatus.data.success) {
    yield put(appAction.serverIsReady())
    yield call(Navigate.toAuthStack)
  }
}
