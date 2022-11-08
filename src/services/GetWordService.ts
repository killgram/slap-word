import axios from 'axios'
import { ApiList, Domains, Constants } from '@configurations'
import { getAccessTokenConfig, getQueryParamsConfig } from '@utils'

/**
 * @description get word service
 * @param {string} token
 * @param {string} length
 */
const getWordService = (token: string, length: string) => {
  const url = `${Domains.getDomain()}${ApiList.GET_WORD}`
  const params = {
    language: Constants.APP_DEFAULT_LANG,
    length: length,
  }

  const config = {
    ...getQueryParamsConfig(params),
    ...getAccessTokenConfig(token),
  }

  return axios.get(url, config)
}

export { getWordService }
