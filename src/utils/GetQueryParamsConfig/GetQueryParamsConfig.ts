/**
 * @description calc params config for services
 */
import { Constants } from '@configurations'

const getQueryParamsConfig = () => {
  return {
    params: {
      language: Constants.APP_DEFAULT_LANG,
    },
  }
}

export { getQueryParamsConfig }
