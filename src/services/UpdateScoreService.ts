import { ApiList, Domains } from '@configurations'
import axios from 'axios'
import { getAccessTokenConfig } from '@utils'

/**
 * @description post update user score service
 * @param {string} token
 * @param {string} login
 * @param {string} password
 * @param {number} score
 */
const updateScoreService = (
  token: string,
  login: string,
  password: string,
  score: number,
) => {
  const url = `${Domains.getDomain()}${ApiList.UPDATE_SCORE}`
  const params = {
    login: login,
    password: password,
    score: score,
  }
  return axios.post(url, params, getAccessTokenConfig(token))
}

export { updateScoreService }
