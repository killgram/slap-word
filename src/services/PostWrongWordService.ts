import { ApiList, Domains } from '@configurations'
import axios from 'axios'
import { getAccessTokenConfig } from '@utils'

/**
 * @description post wrong word service
 * @param {string} token
 * @param {string} word
 */
const postWrongWordService = (token: string, word: string) => {
  const url = `${Domains.getDomain()}${ApiList.WRONG_WORD}`
  const params = {
    word: word,
  }

  return axios.post(url, params, getAccessTokenConfig(token))
}

export { postWrongWordService }
