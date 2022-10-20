import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { defaultHeaderStyle } from '@ui-kit/styles'

const Stack = createStackNavigator()

import SignInScreen from '@screens/SignIn'
import SignUpScreen from '@screens/SignUp'

/**
 * @description authorization stack
 * @constructor
 */
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{
        ...defaultHeaderStyle,
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  )
}
export default AuthStack
