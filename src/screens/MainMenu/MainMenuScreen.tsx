import React, { useLayoutEffect, useState } from 'react'
import { IMainMenuScreenTypesProps } from './MainMenuScreenTypes'
import getStyle from './MainMenuScreenStyles'
import { SWButton, SWContainer } from '@ui-kit/components'
import { GameHeader } from '@components'

/**
 * @description MainMenuScreen
 * @param {IMainMenuScreenTypesProps} props
 * @return {JSX}
 */
const MainMenuScreen = (props: IMainMenuScreenTypesProps) => {
  const { navigation, logout, setSoundtrackStatus, isPlaySound } = props
  const styles = getStyle()

  const [isPlay, setIsPlay] = useState(isPlaySound ?? true)

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: () => null,
    })
  }, [])

  const handleLogout = () => {
    logout?.()
    setIsPlay(false)
  }

  const handleSwitchPlay = () => {
    setIsPlay(!isPlay)
    setSoundtrackStatus?.(!isPlay)
  }

  return (
    <SWContainer style={styles.container}>
      <GameHeader isPlay={isPlay} onSwitchPlay={handleSwitchPlay} />
      <SWButton title="Играть" onPress={handleLogout} />
      <SWButton title="Список лучших" onPress={handleLogout} />
      <SWButton isTransparent title="О приложении" onPress={handleLogout} />
      <SWButton isTransparent title="Поддержка" onPress={handleLogout} />
      <SWButton title="Выйти" onPress={handleLogout} />
    </SWContainer>
  )
}

export default MainMenuScreen
