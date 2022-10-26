import axios from 'axios'
import { ApiList, Domains } from '@configurations'

/**
 * @description get work status
 */
const getServerWorkStatus = () => {
  const url = `${Domains.getDomain()}${ApiList.STATUS}`
  return axios.get(url)
}

export { getServerWorkStatus }
