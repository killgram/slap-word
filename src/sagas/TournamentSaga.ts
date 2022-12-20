import { call, put, select } from 'redux-saga/effects'
import { appAction, gameAction } from '@store/actions'
import {
  ISetTournamentConfig,
  IUpdateScore,
} from '@store/types/tournament/Interfaces'
import { updateScoreService } from '@services'
import { errorToast, successToast } from '@utils'

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
