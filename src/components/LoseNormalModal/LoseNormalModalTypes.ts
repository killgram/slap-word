export interface ILoseNormalModalProps {
  visible: boolean
  closeHandler?: () => void
  hitWord: string
  isPostLoading?: boolean
  onPostWord?: () => void
  onPlayAgain?: () => void
}
