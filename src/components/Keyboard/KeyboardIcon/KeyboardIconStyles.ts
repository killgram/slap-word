import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      backgroundColor: getThemeColor('BACKGROUND_KEYBOARD'),
      width: height(55),
      height: height(45),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: radius(6),
      margin: height(3),
    },
  })
}
