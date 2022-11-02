import axios from 'axios'
import { ApiList, Domains, R3D3ApiList } from '@configurations'
import { getAccessTokenConfig } from '@utils'

/**
 * @description get support data
 * @param {string} token
 */
const getSupportService = (token: string) => {
  const url = `${Domains.getDomain()}${ApiList.SUPPORT}`
  const config = getAccessTokenConfig(token)
  return axios.get(url, config)
}

/**
 * @description get support data in R3D3-info service
 */
const dbSupportInfoData = async () => {
  const url = `${Domains.getR3D3InfoDomain()}${R3D3ApiList.STATUS}`
  return axios.get(url)
}

export { getSupportService, dbSupportInfoData }
