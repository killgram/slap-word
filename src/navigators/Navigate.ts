import NavigationService from './NavigationService'

//-------------------To stacks-------------------//

/**
 * @description auth stack
 */
export const toAuthStack = () => {
  NavigationService.navigateAndReset('AuthStack')
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
