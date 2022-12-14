import { StackNavigationOptions } from '@react-navigation/stack'
import { getThemeColor } from '@utils'

const defaultHeaderStyle: StackNavigationOptions = {
  headerTransparent: true,
  headerBackTitleVisible: false,
  headerTitleAllowFontScaling: true,
  headerTintColor: getThemeColor('MAIN_TEXT'),
}

export { defaultHeaderStyle }
