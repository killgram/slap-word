import axios from 'axios'
import { ApiList, Domains } from '@configurations'
import { getAccessTokenConfig } from '@utils'

/**
 * @description get top score data
 * @param {string} token
 */
const getTopScoreService = (token: string) => {
  const url = `${Domains.getDomain()}${ApiList.GET_TOP_SCORE}`
  const config = getAccessTokenConfig(token)
  return axios.get(url, config)
}

export { getTopScoreService }
