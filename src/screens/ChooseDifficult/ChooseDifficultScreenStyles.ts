import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  topSection: RNStyleType
  bottomSection: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    topSection: {
      flex: 0.85,
    },
    bottomSection: {
      flex: 0.15,
      justifyContent: 'flex-end',
      marginBottom: height(30),
    },
  })
}
