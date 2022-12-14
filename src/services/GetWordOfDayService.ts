import axios from 'axios'
import { ApiList, Domains, Constants } from '@configurations'
import { getAccessTokenConfig, getQueryParamsConfig } from '@utils'

/**
 * @description get word of the day service
 * @param {string} token
 */
const getWordOfDayService = (token: string) => {
  const url = `${Domains.getDomain()}${ApiList.GET_WORD_OF_THE_DAY}`
  const params = {
    language: Constants.APP_DEFAULT_LANG,
  }

  const config = {
    ...getQueryParamsConfig(params),
    ...getAccessTokenConfig(token),
  }

  return axios.get(url, config)
}

export { getWordOfDayService }
