import { StyleProp, TextStyle, ViewStyle, PressableProps } from 'react-native'

export interface ISWButtonProps extends PressableProps {
  title: string
  titleStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
  isDisabled?: boolean
  isSecondary?: boolean
  isLoading?: boolean
  loaderStyle?: StyleProp<ViewStyle>
  isTransparent?: boolean
}
