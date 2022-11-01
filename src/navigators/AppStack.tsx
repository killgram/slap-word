import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import { defaultHeaderStyle } from '@ui-kit/styles'

const Stack = createStackNavigator()

import MainMenuScreen from '@screens/MainMenu'
import RulesScreen from '@screens/Rules'
import AboutAppScreen from '@screens/AboutApp'
import SupportScreen from '@screens/Support'
import TopScoreScreen from '@screens/TopScore'
import GameChooseScreen from '@screens/GameChoose'
import WordOfTheDayScreen from '@screens/WordOfTheDay'
import ChooseDifficultScreen from '@screens/ChooseDifficult'
import TournamentScreen from '@screens/Tournament'

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
      <Stack.Screen name="RulesScreen" component={RulesScreen} />
      <Stack.Screen name="AboutAppScreen" component={AboutAppScreen} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
      <Stack.Screen name="TopScoreScreen" component={TopScoreScreen} />
      <Stack.Screen name="GameChooseScreen" component={GameChooseScreen} />
      <Stack.Screen name="WordOfTheDayScreen" component={WordOfTheDayScreen} />
      <Stack.Screen
        name="ChooseDifficultScreen"
        component={ChooseDifficultScreen}
      />
      <Stack.Screen name="TournamentScreen" component={TournamentScreen} />
    </Stack.Navigator>
  )
}
export default AppStack
