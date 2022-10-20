import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useHeaderHeight } from '@react-navigation/elements'
import { ISWContainerProps } from './SWContainerTypes'
import { width, getThemeStatusBar } from '@utils'
import getStyle from './SWContainerStyles'
import { SWKeyShift } from '@ui-kit/components'

/**
 *
 * @description - the base container for the content
 * contains all the padding required by default
 * @param {ISWContainerProps} props
 * @constructor
 */
const SWContainer = (props: ISWContainerProps) => {
  const {
    paddingBottom,
    paddingHorizontal = 16,
    children,
    style,
    isKeyBoardDismiss = true,
    isTransparentHeader,
  } = props
  const styles = getStyle()
  const insets = useSafeAreaInsets()
  const headerHeight = useHeaderHeight()

  return (
    <SWKeyShift
      disabledKeyboardDismiss={!isKeyBoardDismiss}
      style={StyleSheet.flatten([
        styles.container,
        {
          paddingHorizontal: width(paddingHorizontal),
        },
        style,
      ])}
    >
      <StatusBar barStyle={getThemeStatusBar()} />
      <View
        style={StyleSheet.flatten([
          isTransparentHeader
            ? { paddingTop: headerHeight }
            : { height: insets.top },
        ])}
      />
      {children}
      {paddingBottom && <View style={{ height: insets.bottom }} />}
    </SWKeyShift>
  )
}

export default SWContainer
