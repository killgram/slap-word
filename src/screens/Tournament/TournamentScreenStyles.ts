import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  sectionTop: RNStyleType
  sectionBottom: RNStyleType
  indicatorContainer: RNStyleType
  indicatorTitle: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    sectionTop: {
      flex: 0.75,
    },
    sectionBottom: {
      flex: 0.25,
      marginBottom: height(30),
    },
    indicatorContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    indicatorTitle: {
      marginBottom: height(16),
    },
  })
}
