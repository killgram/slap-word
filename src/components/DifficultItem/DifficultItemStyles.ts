import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  activeContainer: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      backgroundColor: getThemeColor('BACKGROUND_INPUT'),
      marginVertical: height(8),
      padding: height(8),
      borderRadius: radius(12),
    },
    activeContainer: {
      backgroundColor: getThemeColor('RIGHT_TARGET_BACKGROUND_KEYBOARD'),
    },
  })
}
