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
