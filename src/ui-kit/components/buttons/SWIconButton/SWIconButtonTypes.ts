import { StyleProp, ViewStyle, PressableProps } from 'react-native'

export interface ISWIconButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>
  isDisabled?: boolean
  iconSize?: number
  iconColor?: string
  iconName: string
}
