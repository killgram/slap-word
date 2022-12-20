import { StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType, sp, width } from '@utils'

interface IStyles {
  topTitle: RNStyleType
  btn: RNStyleType
  btnBox: RNStyleType
  closeBtn: RNStyleType
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
    btn: {
      paddingHorizontal: width(24),
      marginHorizontal: width(20),
    },
    btnBox: {
      flexDirection: 'row',
      marginTop: height(32),
    },
    closeBtn: {
      backgroundColor: getThemeColor('ERROR_BACKGROUND_TOAST'),
    },
  })
}
