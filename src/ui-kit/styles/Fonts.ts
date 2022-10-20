import { Constants } from '@configurations'
import { sp } from '@utils'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  baseFontStyle: {
    lineHeight: sp(24),
    fontSize: sp(18),
  },
  regular: {
    fontFamily: Constants.APP_FONT_FAMILY.Tinos_Regular,
  },
  bold: {
    fontFamily: Constants.APP_FONT_FAMILY.Tinos_Bold,
  },
  italic: {
    fontFamily: Constants.APP_FONT_FAMILY.Tinos_Italic,
  },
  boldItalic: {
    fontFamily: Constants.APP_FONT_FAMILY.Tinos_Bold_Italic,
  },
})
