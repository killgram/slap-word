import { StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  text: RNStyleType
  successContainer: RNStyleType
  errorContainer: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      height: height(50),
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
    },
    successContainer: {
      backgroundColor: getThemeColor('SUCCESS_BACKGROUND_TOAST'),
    },
    errorContainer: {
      backgroundColor: getThemeColor('ERROR_BACKGROUND_TOAST'),
    },
  })
}
