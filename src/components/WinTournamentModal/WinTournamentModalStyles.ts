import { StyleSheet } from 'react-native'
import { height, RNStyleType, sp, width } from '@utils'

interface IStyles {
  topTitle: RNStyleType
  btn: RNStyleType
  hitWord: RNStyleType
  bottomTitle: RNStyleType
  scoreBox: RNStyleType
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
    hitWord: {
      marginVertical: height(12),
      fontSize: sp(32),
      lineHeight: sp(38),
    },
    bottomTitle: {
      fontSize: sp(20),
      lineHeight: sp(24),
    },
    scoreBox: {
      marginTop: height(16),
      fontSize: sp(20),
      lineHeight: sp(24),
    },
  })
}
