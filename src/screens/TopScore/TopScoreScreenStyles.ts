import { StyleSheet } from 'react-native'
import { height, RNStyleType, sp } from '@utils'

interface IStyles {
  maxScore: RNStyleType
  listStyle: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    maxScore: {
      marginTop: height(12),
      fontSize: sp(32),
      lineHeight: sp(32),
    },
    listStyle: {
      marginBottom: height(30),
    },
  })
}
