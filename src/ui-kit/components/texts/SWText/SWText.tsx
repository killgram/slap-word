import { Text, StyleSheet } from 'react-native'
import React from 'react'
import getStyle from './SWTextStyles'
import { ISWTextProps } from './SWTextTypes'
import { sp } from '@utils'

/**
 *
 * @param {ISWTextProps} props
 * @constructor
 */
const SWText = (props: ISWTextProps) => {
  const {
    children,
    isTitle,
    isSecondary,
    isError,
    isLink,
    style,
    size,
    color,
    inTheCenter,
    ...other
  } = props
  const styles = getStyle()

  return (
    <Text
      style={StyleSheet.flatten([
        styles.font,
        isTitle && styles.title,
        isSecondary && styles.secondary,
        isError && styles.error,
        isLink && styles.link,
        size ? { fontSize: sp(size) } : {},
        color ? { color: color } : {},
        inTheCenter && styles.inTheCenter,
        style,
      ])}
      {...other}
    >
      {children}
    </Text>
  )
}

export default SWText
