import React from 'react'
import getStyle from './KeyboardIconStyles'
import { SWIcon } from '@ui-kit/components'
import { IKeyboardIconProps } from './KeyboardIconTypes'
import { TouchableOpacity } from 'react-native'

/**
 * @description keyboard icon item component
 * @param {IKeyboardIconProps} props
 * @constructor
 */
const KeyboardIcon = (props: IKeyboardIconProps) => {
  const { onPress, name, disabled = false } = props
  const styles = getStyle()

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
    >
      <SWIcon iconName={name} iconSize={26} />
    </TouchableOpacity>
  )
}

export default KeyboardIcon
