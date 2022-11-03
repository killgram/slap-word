import { StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType, width } from '@utils'

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
      width: height(40),
      height: height(40),
      borderWidth: height(1),
      borderColor: getThemeColor('BACKGROUND_KEYBOARD'),
      backgroundColor: getThemeColor('TABLE_ITEM_BACKGROUND'),
      marginHorizontal: width(3),
      marginBottom: height(10),
      justifyContent: 'center',
      alignItems: 'center',
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
