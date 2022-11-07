import { StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType, width } from '@utils'
import { Fonts } from '@ui-kit/styles'

interface IStyles {
  container: RNStyleType
  title: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      width: height(40),
      height: height(40),
      borderWidth: height(1),
      borderColor: getThemeColor('BACKGROUND_KEYBOARD'),
      marginHorizontal: width(3),
      marginBottom: height(10),
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      ...Fonts.baseFontStyle,
      ...Fonts.bold,
    },
  })
}
