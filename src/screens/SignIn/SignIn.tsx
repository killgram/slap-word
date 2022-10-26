import React, { useLayoutEffect } from 'react'
import { ISignInScreenTypesProps } from './SignInTypes'
import getStyle from './SignInStyles'
import { SWButton, SWContainer, SWInput, SWText } from '@ui-kit/components'
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
    <SWContainer style={styles.container}>
      <SWText isTitle>Логин</SWText>

      <SWInput SWContainerStyle={styles.inputs} />

      <SWText isTitle>Пароль</SWText>

      <SWInput SWContainerStyle={styles.inputs} />

      <SWButton title="Войти" />

      <SWButton
        title="Регистрация"
        isTransparent
        onPress={Navigate.toSignUpScreen}
      />
    </SWContainer>
  )
}

export default SignInScreen
