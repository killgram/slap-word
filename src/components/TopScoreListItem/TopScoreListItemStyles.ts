import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType, width } from '@utils'

interface IStyles {
  container: RNStyleType
  number: RNStyleType
  topScore: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      backgroundColor: getThemeColor('BACKGROUND_INPUT'),
      paddingVertical: height(8),
      paddingHorizontal: width(8),
      borderRadius: radius(6),
      marginVertical: height(4),
    },
    number: {
      marginRight: width(8),
    },
    topScore: {
      backgroundColor: getThemeColor('STATIC_BUTTONS'),
    },
  })
}
