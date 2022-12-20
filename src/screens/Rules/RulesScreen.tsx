import React, { useLayoutEffect } from 'react'
import { IRulesScreenTypesProps } from './RulesScreenTypes'
import getStyle from './RulesScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'
import { RulesData } from '@configurations'
import { ScrollView, View } from 'react-native'
import { keyGenerate } from '@utils'

/**
 * @description RulesScreen
 * @param {IRulesScreenTypesProps} props
 * @return {JSX}
 */
const RulesScreen = (props: IRulesScreenTypesProps) => {
  const { navigation } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: 'Правила',
    })
  }, [])

  const renderRules = () => {
    return RulesData.map((item) => {
      return (
        <View key={keyGenerate()} style={styles.box}>
          <SWText style={styles.title}>{item.title}</SWText>
          <SWText>{item.desc}</SWText>
        </View>
      )
    })
  }

  return (
    <SWContainer isKeyBoardDismiss={false} isTransparentHeader>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      >
        {renderRules()}
      </ScrollView>
    </SWContainer>
  )
}

export default RulesScreen
