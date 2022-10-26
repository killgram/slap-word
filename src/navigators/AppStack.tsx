import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import { defaultHeaderStyle } from '@ui-kit/styles'

const Stack = createStackNavigator()

import MainMenuScreen from '@screens/MainMenu'

/**
 * @description app stack
 * @constructor
 */
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainMenuScreen"
      screenOptions={{
        ...defaultHeaderStyle,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}
    >
      <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} />
    </Stack.Navigator>
  )
}
export default AppStack
