import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType, width } from '@utils'

interface IStyles {
  container: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      backgroundColor: getThemeColor('BACKGROUND_ITEMS'),
      paddingVertical: height(6),
      paddingHorizontal: width(12),
      borderRadius: radius(8),
      marginVertical: height(4),
    },
  })
}
