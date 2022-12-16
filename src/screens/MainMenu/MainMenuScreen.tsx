import React, { useLayoutEffect, useState } from 'react'
import { IMainMenuScreenTypesProps } from './MainMenuScreenTypes'
import getStyle from './MainMenuScreenStyles'
import {
  SWButton,
  SWCenterModal,
  SWContainer,
  SWIcon,
  SWText,
} from '@ui-kit/components'
import { GameHeader } from '@components'
import { View } from 'react-native'
import { getThemeColor } from '@utils'
import { Navigate } from '@navigators'

/**
 * @description MainMenuScreen
 * @param {IMainMenuScreenTypesProps} props
 * @return {JSX}
 */
const MainMenuScreen = (props: IMainMenuScreenTypesProps) => {
  const { navigation, logout, setSoundtrackStatus, isPlaySound } = props
  const styles = getStyle()

  const [isPlay, setIsPlay] = useState(isPlaySound ?? true)
  const [isVisible, setIsVisible] = useState(false)

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: () => null,
    })
  }, [])

  /**
   * @description exit func
   */
  const handleLogout = () => {
    logout?.()
    setIsPlay(false)
    onCloseModal()
  }

  /**
   * @description switch soundtrack player status
   */
  const handleSwitchPlay = () => {
    setIsPlay(!isPlay)
    setSoundtrackStatus?.(!isPlay)
  }

  /**
   * @description close modal handler
   */
  const onCloseModal = () => {
    setIsVisible(!isVisible)
  }

  return (
    <SWContainer>
      <GameHeader isPlay={isPlay} onSwitchPlay={handleSwitchPlay} />

      <SWButton
        title="Играть"
        onPress={Navigate.toGameChooseScreen}
        style={styles.controlBtn}
      />
      <SWButton
        title="Список лучших"
        onPress={Navigate.toTopScoreScreen}
        style={styles.controlBtn}
      />

      <SWButton
        isTransparent
        title="О приложении"
        onPress={Navigate.toAboutAppScreen}
        style={styles.controlBtn}
      />
      <SWButton
        isTransparent
        title="Поддержка"
        onPress={Navigate.toSupportScreen}
        style={styles.controlBtn}
      />
      <SWText>{process.env.NODE_ENV}</SWText>
      <View style={styles.exitBtnContainer}>
        <SWButton title="Выйти" onPress={onCloseModal} />
      </View>

      <SWCenterModal isVisible={isVisible} closeHandler={onCloseModal}>
        <SWIcon
          iconName="exit"
          iconSize={60}
          iconColor={getThemeColor('EXIT_ICON')}
        />

        <SWText isTitle style={styles.modalTitle}>
          Вы уверены?
        </SWText>

        <SWButton
          title="Выйти"
          onPress={handleLogout}
          style={styles.modalBtn}
        />
      </SWCenterModal>
    </SWContainer>
  )
}

export default MainMenuScreen
