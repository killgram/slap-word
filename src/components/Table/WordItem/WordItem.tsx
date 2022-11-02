import React from 'react'
import getStyle from './WordItemStyles'
import { SWText } from '@ui-kit/components'
import { IWordItemProps } from './WordItemTypes'

/**
 * @description word item component
 * @param {IWordItemProps} props
 * @constructor
 */
const WordItem = (props: IWordItemProps) => {
  const { name } = props
  const styles = getStyle()

  return <SWText>{name}</SWText>
}

export default WordItem
