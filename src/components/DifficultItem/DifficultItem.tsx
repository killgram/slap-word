import React from 'react'
import getStyle from './DifficultItemStyles'
import { SWText } from '@ui-kit/components'
import { IDifficultItemProps } from './DifficultItemTypes'
import { StyleSheet, TouchableOpacity } from 'react-native'

/**
 * @description difficult item component
 * @param {IDifficultItemProps} props
 * @constructor
 */
const DifficultItem = (props: IDifficultItemProps) => {
  const { value, onPress, isActive } = props
  const styles = getStyle()

  /**
   * @description handle chose difficult
   */
  const handlePress = () => {
    onPress(value)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={StyleSheet.flatten([
        styles.container,
        isActive && styles.activeContainer,
      ])}
    >
      <SWText inTheCenter isTitle>{`Слово из ${value} букв`}</SWText>
    </TouchableOpacity>
  )
}

export default DifficultItem
