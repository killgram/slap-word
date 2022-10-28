import React, { useLayoutEffect } from 'react'
import { ISupportScreenTypesProps } from './SupportScreenTypes'
import getStyle from './SupportScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'

/**
 * @description SupportScreen
 * @param {ISupportScreenTypesProps} props
 * @return {JSX}
 */
const SupportScreen = (props: ISupportScreenTypesProps) => {
  const { navigation } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: 'Поддержка',
    })
  }, [])

  return (
    <SWContainer isTransparentHeader>
      <SWText>SupportScreen</SWText>
    </SWContainer>
  )
}

export default SupportScreen
