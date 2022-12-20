import { NavigationType } from '@navigators'
import { game, settings, tournament } from '@store/types'
import { IKeyboardLine, ITableLine } from '@store/types/game/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  keyboardWords?: IKeyboardLine
  isLoading?: boolean
  hitWord?: string
  isHit?: boolean
  isCheckLoading?: boolean
  wordLength?: number
  tableWords?: ITableLine
  currentLine?: number
  isPostLoading?: boolean
  score?: string
  round?: number
  wordLengthTournament?: string
  isDone?: boolean
}

export interface IState {
  game?: game.IInitialState
  settings?: settings.IInitialState
  tournament?: tournament.IInitialState
}

interface IDispatchToProps {
  closeGame?: (isDone?: boolean) => game.IAction
  checkWordRequest?: (word: string) => game.IAction
  enterWord?: (currentLine: number, word: string) => game.IAction
  deleteWord?: (currentLine: number) => game.IAction
  wrongWordRequest?: (word: string) => settings.IAction
  renderedTableLine?: (currentLine: number) => game.IAction
  setTournamentConfig?: (
    score: string,
    round: number,
    wordLength: string,
  ) => tournament.IAction
  cleanTournament?: () => tournament.IAction
  updateScore?: (score: number) => tournament.IAction
}

export type ITournamentScreenTypesProps = IDispatchToProps & IStateToProps
