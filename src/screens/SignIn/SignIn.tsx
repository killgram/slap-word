import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ISignInScreenTypesProps } from './SignInTypes'
import getStyle from './SignInStyles'
import {
  SWButton,
  SWContainer,
  SWInput,
  SWText,
  SWIconButton,
} from '@ui-kit/components'
import { Navigate } from '@navigators'
import { getThemeColor } from '@utils'

/**
 * @description SignInScreen
 * @param {ISignInScreenTypesProps} props
 * @return {JSX}
 */
const SignInScreen = (props: ISignInScreenTypesProps) => {
  const { navigation, login, isLoading } = props
  const styles = getStyle()
  const [isLoginDisabled, setIsLoginDisabled] = useState(true)
  const [inputLogin, setInputLogin] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [isSecurePass, setIsSecurePass] = useState(true)

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: () => null,
    })
  }, [])

  useEffect(() => {
    if (inputLogin.length && inputPassword.length) {
      setIsLoginDisabled(false)
    } else {
      setIsLoginDisabled(true)
    }
  }, [inputLogin, inputPassword])

  /**
   * @description handle change login func
   * @param {string} e
   */
  const handleInputLogin = (e: string) => {
    setInputLogin(e)
  }

  /**
   * @description handle change password func
   * @param {string} e
   */
  const handleInputPassword = (e: string) => {
    setInputPassword(e)
  }

  /**
   * @description change eye and secure input
   */
  const handleChangeSecurePass = () => {
    setIsSecurePass(!isSecurePass)
  }

  /**
   * @description try to login
   */
  const handleLogin = () => {
    login?.(inputLogin, inputPassword)
  }

  /**
   * @description navigate to sign up screen
   */
  const goToSignUp = () => {
    Navigate.toSignUpScreen()
    handleInputLogin('')
    handleInputPassword('')
    setIsSecurePass(true)
    setIsLoginDisabled(true)
  }

  return (
    <SWContainer style={styles.container}>
      <SWText isTitle>Логин</SWText>
      <SWInput
        SWContainerStyle={styles.inputs}
        value={inputLogin}
        onChangeText={handleInputLogin}
      />
      <SWText isTitle>Пароль</SWText>
      <SWInput
        SWContainerStyle={styles.inputs}
        value={inputPassword}
        onChangeText={handleInputPassword}
        secureTextEntry={isSecurePass}
        rightElement={
          <SWIconButton
            iconName={isSecurePass ? 'eye-open' : 'eye-close'}
            onPress={handleChangeSecurePass}
            iconSize={24}
            iconColor={getThemeColor('SECURE_EYE_PASS_ICON')}
          />
        }
      />
      <SWButton
        title="Войти"
        onPress={handleLogin}
        isDisabled={isLoginDisabled}
        isLoading={isLoading}
      />
      <SWButton title="Регистрация" isTransparent onPress={goToSignUp} />
    </SWContainer>
  )
}

export default SignInScreen
