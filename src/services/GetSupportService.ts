import axios from 'axios'
import { Domains, R3D3ApiList } from '@configurations'

/**
 * @description get support data
 */
const getSupportService = async () => {
  let data = {}
  const url = `${Domains.getR3D3InfoDomain()}${R3D3ApiList.SUPPORT}`
  const res = await axios.get(url)
  res.data.list.forEach((item) => {
    if (item.email) {
      data = {
        email: item.email,
      }
    }
  })
  return data
}

/**
 * @description get support data in R3D3-info service
 */
const dbSupportInfoData = async () => {
  const url = `${Domains.getR3D3InfoDomain()}${R3D3ApiList.STATUS}`
  return axios.get(url)
}

export { getSupportService, dbSupportInfoData }
