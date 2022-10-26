import { takeLatest, all } from 'redux-saga/effects'
import { startup } from './StartupSaga'
import { app } from '@store/types'
import { loginRequest } from './AuthSaga'
import { logout } from './LogoutSaga'

/**
 * @description initialize root saga
 */
export default function* root(): any {
  yield all([takeLatest(app.ActionTypes.STARTUP, startup)])
  yield all([takeLatest(app.ActionTypes.LOGIN_REQUEST, loginRequest)])
  yield all([takeLatest(app.ActionTypes.LOGOUT, logout)])
}

export type RootSaga = ReturnType<typeof root>
