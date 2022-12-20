import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  score?: string
  round?: number
  isDone?: boolean
  wordLength?: string
}

export interface ICleanTournament {
  type: ActionTypes.CLEAN_TOURNAMENT
}

export interface ISetTournamentConfig {
  type: ActionTypes.SET_TOURNAMENT_CONFIG
  score?: string
  round?: number
  wordLength?: string
}

export interface IUpdateTournamentConfig {
  type: ActionTypes.UPDATE_TOURNAMENT_CONFIG
}

export type IAction =
  | ICleanTournament
  | ISetTournamentConfig
  | IUpdateTournamentConfig
