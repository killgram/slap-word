import React, { useMemo } from 'react'
import getStyle from './TablePanelStyles'
import { ITablePanelProps } from './TablePanelTypes'
import { View } from 'react-native'
import { TableItem } from '@components'
import { keyGenerate, numberToArray } from '@utils'
import { GameConfig } from '@configurations'

/**
 * @description table panel component
 * @param {ITablePanelProps} props
 * @constructor
 */
const TablePanel = (props: ITablePanelProps) => {
  const { wordLength, tableWords, onRenderedLine } = props
  const styles = getStyle()
  const tableMatrix = numberToArray(wordLength + 1)
  const animateStep = GameConfig.ANIMATE_STEP

  const renderLine = (line) => {
    return line?.map((item, index) => {
      return (
        <TableItem
          key={keyGenerate()}
          hit={item.hit}
          missing={item.missing}
          coincidence={item.coincidence}
          value={item.name}
          isRendered={item.isRendered}
          onRender={onRenderedLine}
          lastItem={index === line.length - 3}
          timeOutOrder={animateStep + index * animateStep}
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

  const dataMatrix = useMemo(() => renderMatrix(), [tableWords])

  return <View style={styles.container}>{dataMatrix}</View>
}

export default TablePanel
