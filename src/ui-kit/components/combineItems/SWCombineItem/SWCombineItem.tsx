import React from 'react'
import { View, StyleSheet } from 'react-native'
import styles from './SWCombineItemStyles'
import { ISWCombineItemProps } from './SWCombineItemTypes'

/**
 *
 * @param {ISWCombineItemProps} props
 * @description - component accepts up to 3 elements
 * and put them in a row
 * @constructor
 */
const SWCombineItem = (props: ISWCombineItemProps) => {
  const {
    style,
    styleBody,
    bodyElement,
    leftElement,
    rightElement,
    noPadding,
  } = props

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        noPadding && styles.noPadding,
        style,
      ])}
    >
      {leftElement && <View>{leftElement}</View>}
      <View style={StyleSheet.flatten([styles.body, styleBody])}>
        {bodyElement}
      </View>
      {rightElement && <View>{rightElement}</View>}
    </View>
  )
}

export default SWCombineItem
