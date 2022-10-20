import React from 'react'
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
  const {} = props
  const styles = getStyle()

  return (
    <SWContainer>
      <Text>SignUpScreen</Text>
    </SWContainer>
  )
}

export default SignUpScreen
