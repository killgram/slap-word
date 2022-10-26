import axios from 'axios'
import { ApiList, Domains } from '@configurations'

const getServerWorkStatus = () => {
  const url = `${Domains.getDomain()}${ApiList.STATUS}`
  return axios.get(url)
}

export { getServerWorkStatus }
