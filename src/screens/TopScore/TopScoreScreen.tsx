import React, { useLayoutEffect } from 'react'
import { ITopScoreScreenTypesProps } from './TopScoreScreenTypes'
import getStyle from './TopScoreScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'

/**
 * @description TopScoreScreen
 * @param {ITopScoreScreenTypesProps} props
 * @return {JSX}
 */
const TopScoreScreen = (props: ITopScoreScreenTypesProps) => {
  const { navigation } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: 'Список лучших',
    })
  }, [])

  return (
    <SWContainer isTransparentHeader>
      <SWText>TopScoreScreen</SWText>
    </SWContainer>
  )
}

export default TopScoreScreen
