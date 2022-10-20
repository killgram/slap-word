import React from 'react'
import { Button } from 'react-native'
import { ISignInScreenTypesProps } from './SignInTypes'
import getStyle from './SignInStyles'
import { SWContainer, SWText, SWIcon } from '@ui-kit/components'
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
      <SWText size={24}>SignInScreen</SWText>
      <SWIcon iconName="exit" iconSize={40} iconColor="red" />

      <Button title="sign up" onPress={Navigate.toSignUpScreen} />
    </SWContainer>
  )
}

export default SignInScreen
