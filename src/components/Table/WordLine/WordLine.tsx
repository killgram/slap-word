import React from 'react'
import getStyle from './WordLineStyles'
import { SWText } from '@ui-kit/components'
import { IWordLineProps } from './WordLineTypes'

/**
 * @description word line component
 * @param {IWordLineProps} props
 * @constructor
 */
const WordLine = (props: IWordLineProps) => {
  const { name } = props
  const styles = getStyle()

  return <SWText>{name}</SWText>
}

export default WordLine
