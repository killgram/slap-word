import { call, put, select, delay } from 'redux-saga/effects'
import SplashScreen from 'react-native-splash-screen'
import { getServerWorkStatus } from '@services'
import { Navigate } from '@navigators'

/**
 * @description startup saga
 */
export function* startup(): any {
  const serverStatus = yield call(getServerWorkStatus)
  yield call(SplashScreen.hide)

  if (serverStatus.data.success) {
    yield call(Navigate.toAuthStack)
  }
}
