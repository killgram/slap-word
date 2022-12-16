import axios from 'axios'
import { ApiList, Domains, R3D3ApiList } from '@configurations'
import { getAccessTokenConfig } from '@utils'

/**
 * @description get about app data
 * @param {string} token
 */
const getAboutAppService = async (token: string) => {
  let data = {}
  const url = `${Domains.getR3D3InfoDomain()}${R3D3ApiList.SUPPORT}`
  const response = await axios.get(url)
  response.data.list.forEach((item) => {
    data = { ...data, ...item }
  })
  const localUrl = `${Domains.getDomain()}${ApiList.GET_ABOUT_APP}`
  const config = getAccessTokenConfig(token)
  const resData = await axios.get(localUrl, config)
  data = {
    ...data,
    ...resData?.data[0],
  }
  return data
}

export { getAboutAppService }
