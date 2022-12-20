import { StyleSheet } from 'react-native'
import { height, RNStyleType, sp } from '@utils'

interface IStyles {
  title: RNStyleType
  box: RNStyleType
  list: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    title: {
      fontSize: sp(24),
      lineHeight: sp(28),
      textAlign: 'center',
      marginBottom: height(8),
    },
    box: {
      marginBottom: height(16),
    },
    list: {
      marginBottom: height(30),
    },
  })
}
