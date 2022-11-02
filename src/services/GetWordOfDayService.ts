import axios from 'axios'
import { ApiList, Domains } from '@configurations'
import { getAccessTokenConfig, getQueryParamsConfig } from '@utils'

/**
 * @description get word of the day
 * @param {string} token
 */
const getWordOfDayService = (token: string) => {
  const url = `${Domains.getDomain()}${ApiList.GET_WORD_OF_THE_DAY}`
  const config = { ...getQueryParamsConfig(), ...getAccessTokenConfig(token) }

  return axios.get(url, config)
}

export { getWordOfDayService }
