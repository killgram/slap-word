import { aboutApp } from '@store/types'

/**
 *
 * @return {aboutApp.IAction}
 */
export function cleanAboutApp(): aboutApp.IAction {
  return {
    type: aboutApp.ActionTypes.CLEAN_ABOUT_APP,
  }
}

/**
 * @return {aboutApp.IAction}
 */
export function getAboutApp(): aboutApp.IAction {
  return {
    type: aboutApp.ActionTypes.GET_ABOUT_APP,
  }
}

/**
 * @param {string} appGit
 * @param {string} authorGit
 * @param {string} author
 * @param {string} name
 * @param {string} appVersion
 * @return {aboutApp.IAction}
 */
export function onAboutAppSuccess(
  appGit: string,
  authorGit: string,
  author: string,
  name: string,
  appVersion: string,
): aboutApp.IAction {
  return {
    type: aboutApp.ActionTypes.ON_ABOUT_APP_SUCCESS,
    appGit,
    authorGit,
    author,
    name,
    appVersion,
  }
}
