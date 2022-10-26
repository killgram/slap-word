import { StyleSheet } from 'react-native'
import { Fonts } from '@ui-kit/styles'
import { sp } from '@utils'
import { getThemeColor, RNStyleType } from '@utils'

interface IStyles {
  font: RNStyleType
  title: RNStyleType
  secondary: RNStyleType
  link: RNStyleType
  error: RNStyleType
  inTheCenter: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    font: {
      ...Fonts.baseFontStyle,
      ...Fonts.regular,
      color: getThemeColor('MAIN_TEXT'),
    },
    title: {
      ...Fonts.bold,
    },
    secondary: {
      color: getThemeColor('SECONDARY_TEXT'),
      ...Fonts.bold,
    },
    link: {
      color: getThemeColor('LINK_TEXT'),
    },
    error: {
      color: getThemeColor('ERROR_TEXT'),
      fontSize: sp(12),
      lineHeight: sp(20),
    },
    inTheCenter: {
      textAlign: 'center',
    },
  })
}
