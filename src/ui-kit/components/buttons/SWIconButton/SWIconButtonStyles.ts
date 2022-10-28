import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  opacity: RNStyleType
}

/**
 *
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: height(8),
    },
    opacity: {
      opacity: 0.4,
    },
  })
}
