import React, { useEffect, useRef } from 'react'
import { SWCombineItem, SWIconButton, SWText } from '@ui-kit/components'
import { IGameHeaderTypes } from './GameHeaderTypes'
import styles from './GameHeaderStyles'
import { getSound, getThemeColor, SoundTypes } from '@utils'
import { Navigate } from '@navigators'

/**
 * @param { IGameHeaderTypes } props
 * @return { JSX }
 */
const GameHeader = (props: IGameHeaderTypes) => {
  const { isPlay, onSwitchPlay } = props
  const sound = useRef(getSound(SoundTypes.SOUNDTRACK)).current

  /**
   * @description play soundtrack
   */
  const playSoundtrack = () => {
    setTimeout(() => {
      sound.play((success) => {
        success && playSoundtrack()
      })
    }, 333)
  }

  /**
   * @description stop play soundtrack
   */
  const stopSoundtrack = () => {
    sound.stop()
  }

  useEffect(() => {
    isPlay ? playSoundtrack() : stopSoundtrack()
  }, [isPlay])

  return (
    <SWCombineItem
      leftElement={
        <SWIconButton
          iconName="rules"
          onPress={Navigate.toRulesScreen}
          iconColor={getThemeColor('SECURE_EYE_PASS_ICON')}
          iconSize={24}
        />
      }
      rightElement={
        <SWIconButton
          iconName={isPlay ? 'sound-on' : 'sound-off'}
          onPress={onSwitchPlay}
          iconColor={getThemeColor('SECURE_EYE_PASS_ICON')}
          iconSize={24}
        />
      }
      bodyElement={
        <SWText isTitle inTheCenter style={styles.appTitle}>
          Slap Word
        </SWText>
      }
      noPadding
      style={styles.container}
    />
  )
}

export default GameHeader
