export interface IKeyboardItemProps {
  name: string
  coincidence?: boolean
  missing?: boolean
  hit?: boolean
  onPress: (word: string) => void
}
