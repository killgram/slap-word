import Toast from 'react-native-toast-message'
import { Platform } from 'react-native'

/**
 * @description Method to call error toast
 * @param {string} text
 */
const errorToast = (text: string) => {
  const offSet = Platform.OS === 'android' ? 0 : 40
  Toast.show({
    type: 'errorCustom',
    visibilityTime: 2000,
    text1: text,
    topOffset: offSet,
  })
}

/**
 * @description Method to call success toast
 * @param {string} text
 */
const successToast = (text: string) => {
  const offSet = Platform.OS === 'android' ? 0 : 40
  Toast.show({
    type: 'successCustom',
    visibilityTime: 2000,
    text1: text,
    topOffset: offSet,
  })
}

export { errorToast, successToast }
