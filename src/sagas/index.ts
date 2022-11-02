import { takeLatest, all } from 'redux-saga/effects'
import { startup } from './StartupSaga'
import { app, support, aboutApp, topScore, game } from '@store/types'
import { loginRequest, signUpRequest } from './AuthSaga'
import { logout } from './LogoutSaga'
import { getSupport } from './SupportSaga'
import { getAboutApp } from './AboutAppSaga'
import { getTopScore } from './TopScoreSaga'
import { getWordOfTheDay } from './GameSaga'

/**
 * @description initialize root saga
 */
export default function* root(): any {
  yield all([takeLatest(app.ActionTypes.STARTUP, startup)])
  yield all([takeLatest(app.ActionTypes.LOGIN_REQUEST, loginRequest)])
  yield all([takeLatest(app.ActionTypes.LOGOUT, logout)])
  yield all([takeLatest(app.ActionTypes.SIGN_UP_REQUEST, signUpRequest)])
  yield all([takeLatest(support.ActionTypes.GET_SUPPORT, getSupport)])
  yield all([takeLatest(aboutApp.ActionTypes.GET_ABOUT_APP, getAboutApp)])
  yield all([takeLatest(topScore.ActionTypes.GET_TOP_SCORE, getTopScore)])
  yield all([takeLatest(game.ActionTypes.GET_WORD_OF_THE_DAY, getWordOfTheDay)])
}

export type RootSaga = ReturnType<typeof root>
