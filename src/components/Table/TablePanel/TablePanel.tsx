import React from 'react'
import getStyle from './TablePanelStyles'
import { ITablePanelProps } from './TablePanelTypes'
import { View } from 'react-native'
import { TableItem } from '@components'
import { keyGenerate, numberToArray } from '@utils'

/**
 * @description table panel component
 * @param {ITablePanelProps} props
 * @constructor
 */
const TablePanel = (props: ITablePanelProps) => {
  const { wordLength, tableWords } = props
  const styles = getStyle()
  const tableMatrix = numberToArray(wordLength + 1)

  const renderLine = (line) => {
    return line?.map((item) => {
      return (
        <TableItem
          key={keyGenerate()}
          hit={item.hit}
          missing={item.missing}
          coincidence={item.coincidence}
          value={item.name}
        />
      )
    })
  }

  const renderMatrix = () => {
    return tableMatrix.map((_, index) => {
      return (
        <View key={keyGenerate()} style={styles.lineBox}>
          {renderLine(tableWords?.[index])}
        </View>
      )
    })
  }

  return <View style={styles.container}>{renderMatrix()}</View>
}

export default TablePanel
