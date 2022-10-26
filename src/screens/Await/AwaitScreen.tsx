import React from 'react'
import getStyle from './AwaitScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'
import { ActivityIndicator } from 'react-native'
import { getThemeColor } from '@utils'

/**
 * @description AwaitScreen
 * @return {JSX}
 */
const AwaitScreen = () => {
  const styles = getStyle()

  return (
    <SWContainer style={styles.container}>
      <SWText isTitle style={styles.text}>
        Ждем ответа от сервера
      </SWText>
      <ActivityIndicator
        size="large"
        color={getThemeColor('ACTIVITY_INDICATOR')}
      />
    </SWContainer>
  )
}

export default AwaitScreen
