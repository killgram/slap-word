import React from 'react'
import getStyle from './KeyboardItemStyles'
import { SWText } from '@ui-kit/components'
import { IKeyboardItemProps } from './KeyboardItemTypes'
import { StyleSheet, TouchableOpacity } from 'react-native'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'

/**
 * @description keyboard item component
 * @param {IKeyboardItemProps} props
 * @constructor
 */
const KeyboardItem = (props: IKeyboardItemProps) => {
  const { name, hit, missing, coincidence, onPress } = props
  const styles = getStyle()

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={StyleSheet.flatten([
        styles.container,
        missing && styles.missing,
        coincidence && styles.coincidence,
        hit && styles.hit,
      ])}
      onPress={() => {
        ReactNativeHapticFeedback.trigger('soft', options)
        onPress(name)
      }}
    >
      <SWText isTitle>{name.toUpperCase()}</SWText>
    </TouchableOpacity>
  )
}

export default KeyboardItem
