import { takeLatest, all, takeEvery } from 'redux-saga/effects'
import { startup } from './StartupSaga'

/**
 * @description initialize root saga
 */
export default function* root(): any {}

export type RootSaga = ReturnType<typeof root>
