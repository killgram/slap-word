import React from 'react'
import { Button } from 'react-native'
import { ISignInScreenTypesProps } from './SignInTypes'
import getStyle from './SignInStyles'
import {
  SWContainer,
  SWText,
  SWIcon,
  SWButton,
  SWInput,
} from '@ui-kit/components'
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
      <SWText isTitle size={24}>
        SignInScreen
      </SWText>
      <SWText isSecondary size={24}>
        SignInScreen
      </SWText>
      <SWText isError size={24}>
        SignInScreen
      </SWText>
      <SWText isLink size={24}>
        SignInScreen
      </SWText>

      <SWIcon iconName="exit" iconSize={40} iconColor="red" />

      <SWButton title="normal" />
      <SWButton isSecondary title="isSecondary" />
      <SWButton isDisabled title="isDisabled" />
      <SWButton isTransparent title="isTransparent" />
      <SWButton isLoading title="isLoading" />

      <SWInput error="error!" value="sdfdfjdshfjdsbhfjkds" />
      <SWInput placeholder="placeholder" />

      <Button title="sign up" onPress={Navigate.toSignUpScreen} />
    </SWContainer>
  )
}

export default SignInScreen
