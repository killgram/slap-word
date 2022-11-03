import React from 'react'
import getStyle from './TableItemStyles'
import { SWText } from '@ui-kit/components'
import { ITableItemProps } from './TableItemTypes'
import { StyleSheet, View } from 'react-native'

/**
 * @description table item component
 * @param {ITableItemProps} props
 * @constructor
 */
const TableItem = (props: ITableItemProps) => {
  const { value, hit, missing, coincidence } = props
  const styles = getStyle()

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        hit && styles.hit,
        missing && styles.missing,
        coincidence && styles.coincidence,
      ])}
    >
      <SWText isTitle>{value?.toUpperCase()}</SWText>
    </View>
  )
}

export default TableItem
