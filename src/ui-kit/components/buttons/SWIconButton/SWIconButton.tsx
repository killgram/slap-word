import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { SWIcon } from '@ui-kit/components'
import getStyle from './SWIconButtonStyles'
import { ISWIconButtonProps } from './SWIconButtonTypes'

/**
 *
 * @param {ISWIconButtonProps} props
 * @constructor
 */
const SWIconButton = (props: ISWIconButtonProps) => {
  const { style, isDisabled, iconName, iconSize, iconColor, ...other } = props
  const styles = getStyle()

  return (
    <Pressable
      style={({ pressed }) =>
        StyleSheet.flatten([
          styles.container,
          style,
          (isDisabled || pressed) && styles.opacity,
        ])
      }
      disabled={isDisabled}
      {...other}
    >
      <SWIcon iconName={iconName} iconSize={iconSize} iconColor={iconColor} />
    </Pressable>
  )
}

export default SWIconButton
