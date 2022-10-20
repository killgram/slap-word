import React from 'react'
import { DarkTheme, NavigationContainer, Theme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppNavigatorPropsTypes } from '@navigators/NavigatorTypes'
import { getThemeColor } from '@utils'

const Stack = createStackNavigator()

import AuthStack from '@navigators/AuthStack'

/**
 * @description - The basic navigation "wrapper" of the application
 * @param {object} props
 * @param {function} props.forwardRef
 * @param {function} props.onReady
 * @constructor
 */
const AppNavigator = (props: AppNavigatorPropsTypes) => {
  const { forwardRef, onReady } = props

  /**
   * @description Required to set the navigator stack background when
   * switching application themes so that when you navigate the stack, it does not appear
   * white line at the left edge of the screen
   * @return {Theme}
   */
  const setTheme = (): Theme => {
    return {
      dark: DarkTheme.dark,
      colors: {
        ...DarkTheme.colors,
        background: getThemeColor('BACKGROUND'),
      },
    }
  }

  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        navigatorRef != null && forwardRef(navigatorRef)
      }}
      onReady={onReady}
      theme={setTheme()}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
        initialRouteName="AwaitScreen"
      >
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
