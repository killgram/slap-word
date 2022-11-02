import { StyleSheet } from 'react-native'
import { RNStyleType } from '@utils'

interface IStyles {
  lineBox: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    lineBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  })
}
