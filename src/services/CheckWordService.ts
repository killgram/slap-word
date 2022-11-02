import axios from 'axios'
import { ApiList, Constants, Domains } from '@configurations'
import { getAccessTokenConfig, getQueryParamsConfig } from '@utils'

/**
 * @description check word service
 * @param {string} token
 * @param {string} word
 */
const checkWordService = (token: string, word: string) => {
  const url = `${Domains.getDomain()}${ApiList.CHECK_WORD}`
  const params = {
    language: Constants.APP_DEFAULT_LANG,
    word: word,
  }
  const config = {
    ...getQueryParamsConfig(params),
    ...getAccessTokenConfig(token),
  }
  return axios.get(url, config)
}

export { checkWordService }
