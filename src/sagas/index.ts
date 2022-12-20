import { takeLatest, all } from 'redux-saga/effects'
import { startup } from './StartupSaga'
import {
  app,
  support,
  aboutApp,
  topScore,
  game,
  settings,
  tournament,
} from '@store/types'
import { loginRequest, signUpRequest } from './AuthSaga'
import { logout } from './LogoutSaga'
import { getSupport } from './SupportSaga'
import { getAboutApp } from './AboutAppSaga'
import { getTopScore } from './TopScoreSaga'
import {
  getWordOfTheDay,
  checkWordRequest,
  closeGame,
  getWord,
} from './GameSaga'
import { wrongWordRequest } from './WrongWordSaga'
import { setTournamentConfig, updateScore } from './TournamentSaga'

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
  yield all([takeLatest(game.ActionTypes.CHECK_WORD_REQUEST, checkWordRequest)])
  yield all([takeLatest(game.ActionTypes.CLOSE_GAME, closeGame)])
  yield all([
    takeLatest(settings.ActionTypes.WRONG_WORD_REQUEST, wrongWordRequest),
  ])
  yield all([takeLatest(game.ActionTypes.GET_WORD_REQUEST, getWord)])
  yield all([
    takeLatest(
      tournament.ActionTypes.SET_TOURNAMENT_CONFIG,
      setTournamentConfig,
    ),
  ])
  yield all([takeLatest(tournament.ActionTypes.UPDATE_SCORE, updateScore)])
}

export type RootSaga = ReturnType<typeof root>
