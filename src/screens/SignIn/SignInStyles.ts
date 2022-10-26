import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  inputs: RNStyleType
  container: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    inputs: {
      marginTop: height(12),
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  })
}
