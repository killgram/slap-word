import axios from 'axios'
import { ApiList, Domains } from '@configurations'

/**
 * @description login service
 * @param {string} login
 * @param {string} password
 */
const loginService = (login: string, password: string) => {
  const url = `${Domains.getDomain()}${ApiList.SIGN_IN}`
  const data = {
    login: login,
    password: password,
  }
  return axios.get(url, { params: data })
}

/**
 * @description sign up service
 * @param {string} login
 * @param {string} password
 */
const signUpService = (login: string, password: string) => {
  const url = `${Domains.getDomain()}${ApiList.SIGN_UP}`
  const data = {
    login: login,
    password: password,
  }
  return axios.post(url, data)
}

export { loginService, signUpService }
