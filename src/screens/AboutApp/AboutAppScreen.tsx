import React, { useEffect, useLayoutEffect } from 'react'
import { IAboutAppScreenTypesProps } from './AboutAppScreenTypes'
import getStyle from './AboutAppScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'
import DeviceInfo from 'react-native-device-info'
import { AboutAppItem } from '@components'
import { ActivityIndicator, View } from 'react-native'
import { getThemeColor } from '@utils'

/**
 * @description AboutAppScreen
 * @param {IAboutAppScreenTypesProps} props
 * @return {JSX}
 */
const AboutAppScreen = (props: IAboutAppScreenTypesProps) => {
  const { navigation, getAboutApp, aboutApp, isLoading } = props
  const { name, appGit, authorGit, author } = aboutApp!
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: 'О приложении',
    })
  }, [])

  useEffect(() => {
    !name && getAboutApp?.()
  }, [])

  return isLoading ? (
    <View style={styles.loadingBox}>
      <ActivityIndicator
        size="large"
        color={getThemeColor('ACTIVITY_INDICATOR')}
      />
    </View>
  ) : (
    <SWContainer isTransparentHeader>
      <SWText inTheCenter isTitle style={styles.name}>
        {name}
      </SWText>

      <AboutAppItem title="Автор" executeTitle={author!} />
      <AboutAppItem
        title="Github приложения"
        executeTitle={appGit!}
        isExecuteLink
      />
      <AboutAppItem
        title="Github автора"
        executeTitle={authorGit!}
        isExecuteLink
      />

      <SWText
        inTheCenter
        isTitle
        style={styles.version}
      >{`Версия: ${DeviceInfo?.getVersion()}`}</SWText>
    </SWContainer>
  )
}

export default AboutAppScreen
