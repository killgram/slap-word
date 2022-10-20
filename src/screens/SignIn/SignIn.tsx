import React from 'react'
import { Button, Text } from 'react-native'
import { ISignInScreenTypesProps } from './SignInTypes'
import getStyle from './SignInStyles'
import { SWContainer } from '@ui-kit/components'
import { Navigate } from '@navigators'

/**
 * @description SignInScreen
 * @param {ISignInScreenTypesProps} props
 * @return {JSX}
 */
const SignInScreen = (props: ISignInScreenTypesProps) => {
  const {} = props
  const styles = getStyle()

  return (
    <SWContainer>
      <Text>SignInScreen</Text>
      <Button title="sign up" onPress={Navigate.toSignUpScreen} />
    </SWContainer>
  )
}

export default SignInScreen
