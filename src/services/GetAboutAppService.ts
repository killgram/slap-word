import axios from 'axios'
import { ApiList, Domains } from '@configurations'
import { getAccessTokenConfig } from '@utils'

/**
 * @description get about app data
 * @param {string} token
 */
const getAboutAppService = (token: string) => {
  const url = `${Domains.getDomain()}${ApiList.GET_ABOUT_APP}`
  const config = getAccessTokenConfig(token)
  return axios.get(url, config)
}

export { getAboutAppService }
