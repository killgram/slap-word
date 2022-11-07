export interface ITableItemProps {
  value?: string
  coincidence?: boolean
  missing?: boolean
  hit?: boolean
  onRender: () => void
  isRendered?: boolean
  lastItem?: boolean
  timeOutOrder: number
}
