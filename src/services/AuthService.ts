import axios from 'axios'
import { ApiList, Domains } from '@configurations'

/**
 * @description login
 * @param login
 * @param password
 */
const loginService = (login: string, password: string) => {
  const url = `${Domains.getDomain()}${ApiList.SIGN_IN}`
  const data = {
    login: login,
    password: password,
  }
  return axios.get(url, { params: data })
}

export { loginService }
