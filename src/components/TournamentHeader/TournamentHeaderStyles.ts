import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  roundScoreBox: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      marginBottom: height(16),
    },
    roundScoreBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
}
