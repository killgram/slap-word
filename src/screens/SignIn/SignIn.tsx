import React, { useLayoutEffect } from 'react'
import { ISignInScreenTypesProps } from './SignInTypes'
import getStyle from './SignInStyles'
import { SWContainer, SWText, SWButton } from '@ui-kit/components'
import { Navigate } from '@navigators'

/**
 * @description SignInScreen
 * @param {ISignInScreenTypesProps} props
 * @return {JSX}
 */
const SignInScreen = (props: ISignInScreenTypesProps) => {
  const { navigation } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: () => null,
    })
  }, [])

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

      <SWButton title="to sign up" onPress={Navigate.toSignUpScreen} />
    </SWContainer>
  )
}

export default SignInScreen
