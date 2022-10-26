import React, { useLayoutEffect } from 'react'
import { IMainMenuScreenTypesProps } from './MainMenuScreenTypes'
import getStyle from './MainMenuScreenStyles'
import { SWButton, SWContainer, SWText } from '@ui-kit/components'

/**
 * @description MainMenuScreen
 * @param {IMainMenuScreenTypesProps} props
 * @return {JSX}
 */
const MainMenuScreen = (props: IMainMenuScreenTypesProps) => {
  const { navigation, logout } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: () => null,
    })
  }, [])

  const handleLogout = () => {
    logout?.()
  }

  return (
    <SWContainer style={styles.container}>
      <SWText>MainMenuScreen</SWText>

      <SWButton title="Выйти" onPress={handleLogout} />
    </SWContainer>
  )
}

export default MainMenuScreen
