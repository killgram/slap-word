import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ISignUpScreenTypesProps } from './SignUpTypes'
import getStyle from './SignUpStyles'
import {
  SWButton,
  SWContainer,
  SWIconButton,
  SWInput,
  SWText,
} from '@ui-kit/components'
import { getThemeColor } from '@utils'

/**
 * @description SignUpScreen
 * @param {ISignUpScreenTypesProps} props
 * @return {JSX}
 */
const SignUpScreen = (props: ISignUpScreenTypesProps) => {
  const { navigation, signUpRequest, isLoading } = props
  const styles = getStyle()
  const [isRegDisabled, setIsRegDisabled] = useState(true)
  const [inputLogin, setInputLogin] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [isSecurePass, setIsSecurePass] = useState(true)

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: 'Регистрация',
    })
  }, [])

  useEffect(() => {
    if (inputLogin.length && inputPassword.length) {
      setIsRegDisabled(false)
    } else {
      setIsRegDisabled(true)
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
   * @description try to sign up
   */
  const handleSignUp = () => {
    signUpRequest?.(inputLogin, inputPassword)
  }

  return (
    <SWContainer isTransparentHeader style={styles.container}>
      <SWText isTitle>Введите логин:</SWText>
      <SWInput
        SWContainerStyle={styles.inputs}
        value={inputLogin}
        onChangeText={handleInputLogin}
      />

      <SWText isTitle>Введите пароль:</SWText>
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
        title="Зарегистрироваться"
        isDisabled={isRegDisabled}
        isLoading={isLoading}
        onPress={handleSignUp}
      />
    </SWContainer>
  )
}

export default SignUpScreen
