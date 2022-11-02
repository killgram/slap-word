import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  itemContainer: RNStyleType
  indicator: RNStyleType
  helpItemContainer: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    itemContainer: {
      marginTop: height(8),
    },
    indicator: {
      marginVertical: height(12),
    },
    helpItemContainer: {
      marginTop: height(8),
      flex: 1,
      marginBottom: height(30),
    },
  })
}
