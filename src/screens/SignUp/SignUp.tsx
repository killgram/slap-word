import React, { useLayoutEffect } from 'react'
import { ISignUpScreenTypesProps } from './SignUpTypes'
import getStyle from './SignUpStyles'
import { SWButton, SWContainer, SWInput, SWText } from '@ui-kit/components'

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
    <SWContainer isTransparentHeader style={styles.container}>
      <SWText isTitle>Введите логин:</SWText>
      <SWInput SWContainerStyle={styles.inputs} />

      <SWText isTitle>Введите пароль:</SWText>
      <SWInput SWContainerStyle={styles.inputs} secureTextEntry={true} />

      <SWButton title="Зарегистрироваться" />
    </SWContainer>
  )
}

export default SignUpScreen
