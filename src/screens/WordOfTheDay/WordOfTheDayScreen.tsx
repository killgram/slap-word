import React, { useLayoutEffect } from 'react'
import { IWordOfTheDayTypesProps } from './WordOfTheDayScreenTypes'
import getStyle from './WordOfTheDayScreenStyles'
import { SWButton, SWContainer, SWText } from '@ui-kit/components'

/**
 * @description WordOfTheDay
 * @param {IWordOfTheDayTypesProps} props
 * @return {JSX}
 */
const WordOfTheDay = (props: IWordOfTheDayTypesProps) => {
  const { navigation, updateWordOfDayLastTime } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: () => null,
      headerLeft: () => null,
    })
  }, [])

  return (
    <SWContainer>
      <SWText inTheCenter>WordOfTheDay</SWText>
      <SWButton title="сыграли" onPress={updateWordOfDayLastTime} />
    </SWContainer>
  )
}

export default WordOfTheDay
