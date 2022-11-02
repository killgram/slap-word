import { IKeyboardLine } from '@store/types/game/Interfaces'

export interface IKeyboardPanelProps {
  wordList: IKeyboardLine
  onPressWord: (word: string) => void
  onDeleteWord: () => void
  onCheckWord: () => void
  isCheckPossible: boolean
}
