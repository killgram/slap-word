export interface IWinTournamentModalProps {
  visible: boolean
  closeHandler?: () => void
  hitWord: string
  score: number
  newScore: number
}
