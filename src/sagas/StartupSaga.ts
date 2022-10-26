import { call, put, select, delay } from 'redux-saga/effects'
import SplashScreen from 'react-native-splash-screen'

/**
 * @description startup saga
 */
export function* startup(): any {
  yield call(SplashScreen.hide)
}
