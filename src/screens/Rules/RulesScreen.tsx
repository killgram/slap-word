import React, { useLayoutEffect } from 'react'
import { IRulesScreenTypesProps } from './RulesScreenTypes'
import getStyle from './RulesScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'

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

  return (
    <SWContainer style={styles.container} isTransparentHeader>
      <SWText>RulesScreen</SWText>
    </SWContainer>
  )
}

export default RulesScreen
