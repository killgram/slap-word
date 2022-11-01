import { StyleSheet } from 'react-native'
import { height, RNStyleType, sp } from '@utils'

interface IStyles {
  name: RNStyleType
  version: RNStyleType
  loadingBox: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    name: {
      fontSize: sp(40),
      lineHeight: sp(40),
      marginVertical: height(16),
    },
    version: {
      marginTop: height(16),
    },
    loadingBox: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  })
}
