import { ITableLine } from '@store/types/game/Interfaces'

export interface ITablePanelProps {
  wordLength: number
  tableWords: ITableLine
  onRenderedLine: () => void
}
