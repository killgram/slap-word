import React, { useLayoutEffect } from 'react'
import { ITournamentScreenTypesProps } from './TournamentScreenTypes'
import getStyle from './TournamentScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'

/**
 * @description TournamentScreen
 * @param {ITournamentScreenTypesProps} props
 * @return {JSX}
 */
const TournamentScreen = (props: ITournamentScreenTypesProps) => {
  const { navigation } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: () => null,
      headerLeft: () => null,
    })
  }, [])

  return (
    <SWContainer>
      <SWText inTheCenter>TournamentScreen</SWText>
    </SWContainer>
  )
}

export default TournamentScreen
