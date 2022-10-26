import React, { useLayoutEffect } from 'react'
import { IMainMenuScreenTypesProps } from './MainMenuScreenTypes'
import getStyle from './MainMenuScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'

/**
 * @description MainMenuScreen
 * @param {IMainMenuScreenTypesProps} props
 * @return {JSX}
 */
const MainMenuScreen = (props: IMainMenuScreenTypesProps) => {
  const { navigation } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: () => null,
    })
  }, [])

  return (
    <SWContainer style={styles.container}>
      <SWText>MainMenuScreen</SWText>
    </SWContainer>
  )
}

export default MainMenuScreen
