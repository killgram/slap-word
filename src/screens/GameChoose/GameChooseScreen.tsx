import React, { useLayoutEffect } from 'react'
import { IGameChooseScreenTypesProps } from './GameChooseScreenTypes'
import getStyle from './GameChooseScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'

/**
 * @description GameChooseScreen
 * @param {IGameChooseScreenTypesProps} props
 * @return {JSX}
 */
const GameChooseScreen = (props: IGameChooseScreenTypesProps) => {
  const { navigation } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: 'Выберите тип игры',
    })
  }, [])

  return (
    <SWContainer isTransparentHeader>
      <SWText>GameChooseScreen</SWText>
    </SWContainer>
  )
}

export default GameChooseScreen
