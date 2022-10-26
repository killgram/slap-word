import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  inputs: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      flex: 0.88,
      justifyContent: 'center',
    },
    inputs: {
      marginTop: height(12),
    },
  })
}
