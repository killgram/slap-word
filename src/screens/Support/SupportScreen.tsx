import React, { useEffect, useLayoutEffect } from 'react'
import { ISupportScreenTypesProps } from './SupportScreenTypes'
import getStyle from './SupportScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'
import { SupportItem } from '@components'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import {
  copyToClipboard,
  getThemeColor,
  keyGenerate,
  successToast,
} from '@utils'

/**
 * @description SupportScreen
 * @param {ISupportScreenTypesProps} props
 * @return {JSX}
 */
const SupportScreen = (props: ISupportScreenTypesProps) => {
  const { navigation, getSupport, email, isLoading, helpData, isHelpLoading } =
    props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: 'Поддержка',
    })
  }, [])

  useEffect(() => {
    !email && getSupport?.()
  }, [])

  /**
   * @description render help items
   */
  const renderHelpData = () => {
    return helpData?.map((item) => {
      return (
        <SupportItem
          key={keyGenerate()}
          bodyTitle={Object.keys(item)[0]}
          onCopy={() => handleCopy(String(Object.values(item)[0]))}
        />
      )
    })
  }

  /**
   * @description copy handler
   * @param {string} message
   */
  const handleCopy = (message: string) => {
    copyToClipboard(message)
    successToast('Успешно скопировано 😎')
  }

  return (
    <SWContainer isTransparentHeader isKeyBoardDismiss={false}>
      <SWText inTheCenter isTitle>
        Если вы обнаружили ошибку или хотите предложить идею по улучшению
        приложения, вы можете написать мне на email
      </SWText>

      <View style={styles.itemContainer}>
        {!isLoading ? (
          <SupportItem bodyTitle={email!} onCopy={() => handleCopy(email!)} />
        ) : (
          <ActivityIndicator
            size="large"
            color={getThemeColor('ACTIVITY_INDICATOR')}
            style={styles.indicator}
          />
        )}
      </View>

      {!isHelpLoading ? (
        <View style={styles.helpItemContainer}>
          <SWText inTheCenter isTitle>
            Хотя приложение полностью бесплатное, вы всегда можете поддержать
            автора, если хотите.
          </SWText>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            {renderHelpData()}
          </ScrollView>
        </View>
      ) : (
        <ActivityIndicator
          size="large"
          color={getThemeColor('ACTIVITY_INDICATOR')}
          style={styles.indicator}
        />
      )}
    </SWContainer>
  )
}

export default SupportScreen
