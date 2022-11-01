/**
 * @description calc header config for services
 * @param token
 */
const getAccessTokenConfig = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

export { getAccessTokenConfig }
