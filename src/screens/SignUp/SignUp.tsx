import React, { useLayoutEffect } from 'react'
import { Text } from 'react-native'
import { ISignUpScreenTypesProps } from './SignUpTypes'
import getStyle from './SignUpStyles'
import { SWContainer } from '@ui-kit/components'

/**
 * @description SignUpScreen
 * @param {ISignUpScreenTypesProps} props
 * @return {JSX}
 */
const SignUpScreen = (props: ISignUpScreenTypesProps) => {
  const { navigation } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: 'Регистрация',
    })
  }, [])

  return (
    <SWContainer isTransparentHeader>
      <Text>SignUpScreen</Text>
    </SWContainer>
  )
}

export default SignUpScreen
