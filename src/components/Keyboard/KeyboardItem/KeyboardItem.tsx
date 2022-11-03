import React from 'react'
import getStyle from './KeyboardItemStyles'
import { SWText } from '@ui-kit/components'
import { IKeyboardItemProps } from './KeyboardItemTypes'
import { StyleSheet, TouchableOpacity } from 'react-native'

/**
 * @description keyboard item component
 * @param {IKeyboardItemProps} props
 * @constructor
 */
const KeyboardItem = (props: IKeyboardItemProps) => {
  const { name, hit, missing, coincidence, onPress } = props
  const styles = getStyle()

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={StyleSheet.flatten([
        styles.container,
        missing && styles.missing,
        coincidence && styles.coincidence,
        hit && styles.hit,
      ])}
      onPress={() => onPress(name)}
    >
      <SWText isTitle>{name.toUpperCase()}</SWText>
    </TouchableOpacity>
  )
}

export default KeyboardItem
