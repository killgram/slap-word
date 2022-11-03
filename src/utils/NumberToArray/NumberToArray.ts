/**
 * @description converting number to array of numbers
 * @param {number} number
 * @return {Array<any>}
 */
const numberToArray = (number: number): Array<any> => {
  let result: Array<any> = []
  for (let i = 0; i < number; i++) {
    result.push([])
  }
  return result
}

export { numberToArray }
