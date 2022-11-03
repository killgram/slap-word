import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType, sp, width } from '@utils'

interface IStyles {
  topTitle: RNStyleType
  hitWord: RNStyleType
  btn: RNStyleType
  bottomTitle: RNStyleType
  incBox: RNStyleType
  incTitle: RNStyleType
  indicatorBox: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    topTitle: {
      marginTop: height(16),
      fontSize: sp(20),
      lineHeight: sp(24),
    },
    hitWord: {
      marginVertical: height(12),
      fontSize: sp(32),
      lineHeight: sp(38),
    },
    btn: {
      marginTop: height(16),
      paddingHorizontal: width(24),
    },
    bottomTitle: {
      paddingHorizontal: width(32),
    },
    incBox: {
      backgroundColor: getThemeColor('ERROR_INPUT'),
      paddingHorizontal: width(6),
      paddingVertical: height(6),
      borderRadius: radius(4),
      marginTop: height(12),
    },
    incTitle: {
      color: getThemeColor('SECONDARY_TEXT'),
    },
    indicatorBox: {
      paddingHorizontal: width(6),
      paddingVertical: height(6),
      marginTop: height(12),
    },
  })
}
