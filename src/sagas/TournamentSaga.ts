import { call, put, select } from 'redux-saga/effects'
import { appAction, gameAction, tournamentAction } from '@store/actions'
import {
  ISetTournamentConfig,
  IUpdateScore,
} from '@store/types/tournament/Interfaces'
import { updateScoreService } from '@services'
import { errorToast, getRandomRangeNumber, successToast } from '@utils'
import { TournamentConfig } from '@configurations'

/**
 * @description set tournament config saga
 */
export function* setTournamentConfig(action: ISetTournamentConfig): any {
  yield put(gameAction.getWordRequest(action?.wordLength!))
}

/**
 * @description update user score saga
 */
export function* updateScore(action: IUpdateScore): any {
  const { score } = action
  const state = yield select()
  const login = state?.app?.login
  const password = state?.app?.password
  const accessToken = state?.app?.accessToken
  try {
    const data = yield call(
      updateScoreService,
      accessToken,
      login,
      password,
      score!,
    )
    if (data?.data?.success) {
      yield put(appAction.updateMaxScore(score!))
      yield call(successToast, 'Счет успешно обновлен 😎')
    }
  } catch (e) {
    yield call(errorToast, 'Неудалось обновить счет 😔')
  }
}

/**
 * @description update tournament config saga
 */
export function* updateTournamentConfig(): any {
  const state = yield select()
  const score = state?.tournament?.score
  const round = state?.tournament?.round
  const wordLength = state?.tournament?.wordLength
  try {
    const newScore =
      Number(score) + TournamentConfig.ONE_WORD_IN_SCORE * Number(wordLength)
    const newRound = Number(round) + 1
    const newWordLength = getRandomRangeNumber(
      TournamentConfig.MIN_WORD_LENGTH,
      TournamentConfig.MAX_WORD_LENGTH,
    )
    yield put(
      tournamentAction.setTournamentConfig(
        String(newScore),
        newRound,
        String(newWordLength),
      ),
    )
  } catch (e) {
    yield call(errorToast, 'Неудалось перейти в следующий раунд 😔')
  }
}
