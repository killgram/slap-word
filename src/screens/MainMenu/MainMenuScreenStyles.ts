import { StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'

interface IStyles {
  exitBtnContainer: RNStyleType
  controlBtn: RNStyleType
  modalTitle: RNStyleType
  modalBtn: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    exitBtnContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: height(30),
    },
    controlBtn: {
      marginVertical: height(8),
    },
    modalTitle: {
      marginVertical: height(16),
    },
    modalBtn: {
      height: 'auto',
      paddingHorizontal: width(24),
    },
  })
}
