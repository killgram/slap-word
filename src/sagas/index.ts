import { takeLatest, all, takeEvery } from 'redux-saga/effects'
import { startup } from './StartupSaga'
import { app } from '@store/types'

/**
 * @description initialize root saga
 */
export default function* root(): any {
  yield all([takeLatest(app.ActionTypes.STARTUP, startup)])
}

export type RootSaga = ReturnType<typeof root>
