import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  coincidence: RNStyleType
  missing: RNStyleType
  hit: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      backgroundColor: getThemeColor('BACKGROUND_KEYBOARD'),
      width: height(35),
      height: height(45),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: radius(6),
      margin: height(3),
    },
    coincidence: {
      backgroundColor: getThemeColor('COINCIDENCE_BACKGROUND_KEYBOARD'),
    },
    missing: {
      backgroundColor: getThemeColor('MISSING_BACKGROUND_KEYBOARD'),
    },
    hit: {
      backgroundColor: getThemeColor('RIGHT_TARGET_BACKGROUND_KEYBOARD'),
    },
  })
}
