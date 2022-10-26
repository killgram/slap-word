import React, { useLayoutEffect } from 'react'
import { ISignInScreenTypesProps } from './SignInTypes'
import getStyle from './SignInStyles'
import { SWContainer, SWText, SWButton } from '@ui-kit/components'
import { Navigate } from '@navigators'
import { Domains } from '@configurations'

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
        {Domains.getR3D3InfoDomain()}
      </SWText>
      <SWText isSecondary size={24}>
        {Domains.getDomain()}
      </SWText>
      <SWText isLink size={24}>
        {process.env.NODE_ENV}
      </SWText>
      <SWButton title="to sign up" onPress={Navigate.toSignUpScreen} />
    </SWContainer>
  )
}

export default SignInScreen
