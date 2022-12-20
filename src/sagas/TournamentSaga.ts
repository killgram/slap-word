import { put } from 'redux-saga/effects'
import { gameAction } from '@store/actions'
import { ISetTournamentConfig } from '@store/types/tournament/Interfaces'

/**
 * @description set tournament config saga
 */
export function* setTournamentConfig(action: ISetTournamentConfig): any {
  yield put(gameAction.getWordRequest(action?.wordLength!))
}
