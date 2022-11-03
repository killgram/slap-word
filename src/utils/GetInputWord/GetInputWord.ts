/**
 * @description get input word in words array
 * @param {any} data
 */
const getInputWord = (data: any) => {
  let result = ''
  data?.forEach((item) => {
    result += item.name
  })
  return result
}

export { getInputWord }
