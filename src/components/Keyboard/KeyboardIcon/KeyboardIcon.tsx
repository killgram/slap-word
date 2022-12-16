import React from 'react'
import getStyle from './KeyboardIconStyles'
import { SWIcon } from '@ui-kit/components'
import { IKeyboardIconProps } from './KeyboardIconTypes'
import { TouchableOpacity } from 'react-native'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'

/**
 * @description keyboard icon item component
 * @param {IKeyboardIconProps} props
 * @constructor
 */
const KeyboardIcon = (props: IKeyboardIconProps) => {
  const { onPress, name, disabled = false } = props
  const styles = getStyle()

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={() => {
        ReactNativeHapticFeedback.trigger('soft', options)
        onPress()
      }}
      disabled={disabled}
    >
      <SWIcon iconName={name} iconSize={26} />
    </TouchableOpacity>
  )
}

export default KeyboardIcon
