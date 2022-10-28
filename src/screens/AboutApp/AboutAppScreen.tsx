import React, { useLayoutEffect } from 'react'
import { IAboutAppScreenTypesProps } from './AboutAppScreenTypes'
import getStyle from './AboutAppScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'

/**
 * @description AboutAppScreen
 * @param {IAboutAppScreenTypesProps} props
 * @return {JSX}
 */
const AboutAppScreen = (props: IAboutAppScreenTypesProps) => {
  const { navigation } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: 'О приложении',
    })
  }, [])

  return (
    <SWContainer isTransparentHeader>
      <SWText>AboutAppScreen</SWText>
    </SWContainer>
  )
}

export default AboutAppScreen
