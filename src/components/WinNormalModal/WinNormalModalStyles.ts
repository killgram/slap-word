import { StyleSheet } from 'react-native'
import { height, RNStyleType, sp, width } from '@utils'

interface IStyles {
  topTitle: RNStyleType
  btn: RNStyleType
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
      marginTop: height(16),
      paddingHorizontal: width(24),
    },
  })
}
