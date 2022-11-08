import NavigationService from './NavigationService'

//-------------------To stacks-------------------//

/**
 * @description auth stack
 */
export const toAuthStack = () => {
  NavigationService.navigateAndReset('AuthStack')
}

/**
 * @description app stack
 */
export const toAppStack = () => {
  NavigationService.navigateAndReset('AppStack')
}

//-------------------Auth-------------------//

/**
 * @description to SignInScreen
 */
export const toSignInScreen = () => {
  NavigationService.navigate('AuthStack', {
    screen: 'SignInScreen',
  })
}

/**
 * @description to SignUpScreen
 */
export const toSignUpScreen = () => {
  NavigationService.navigate('AuthStack', {
    screen: 'SignUpScreen',
  })
}

//-------------------App--------------------//

/**
 * @description to RulesScreen
 */
export const toRulesScreen = () => {
  NavigationService.navigate('AppStack', {
    screen: 'RulesScreen',
  })
}

/**
 * @description to AboutAppScreen
 */
export const toAboutAppScreen = () => {
  NavigationService.navigate('AppStack', {
    screen: 'AboutAppScreen',
  })
}

/**
 * @description to SupportScreen
 */
export const toSupportScreen = () => {
  NavigationService.navigate('AppStack', {
    screen: 'SupportScreen',
  })
}

/**
 * @description to TopScoreScreen
 */
export const toTopScoreScreen = () => {
  NavigationService.navigate('AppStack', {
    screen: 'TopScoreScreen',
  })
}

/**
 * @description to GameChooseScreen
 */
export const toGameChooseScreen = () => {
  NavigationService.navigate('AppStack', {
    screen: 'GameChooseScreen',
  })
}

/**
 * @description to WordOfTheDayScreen
 * @param {string} length
 */
export const toWordOfTheDayScreen = (length?: string) => {
  NavigationService.navigate('AppStack', {
    screen: 'WordOfTheDayScreen',
    params: {
      wordLength: length,
    },
  })
}

/**
 * @description to ChooseDifficultScreen
 */
export const toChooseDifficultScreen = () => {
  NavigationService.navigate('AppStack', {
    screen: 'ChooseDifficultScreen',
  })
}

/**
 * @description to TournamentScreen
 */
export const toTournamentScreen = () => {
  NavigationService.navigate('AppStack', {
    screen: 'TournamentScreen',
  })
}
