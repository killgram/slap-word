import { ILine } from '@store/types/game/Interfaces'
import { numberToArray } from '@utils'

/**
 * @description generate table configuration
 * @param {number} wordLength
 */
const generateTableConfig = (wordLength: number) => {
  const config: ILine = {
    name: '',
    coincidence: false,
    missing: false,
    hit: false,
  }
  const lineArray = numberToArray(wordLength)
  const matrixArray = numberToArray(wordLength + 1)
  lineArray.forEach((_, index) => {
    lineArray[index] = { ...config }
  })
  matrixArray.forEach((_, index) => {
    matrixArray[index] = [...lineArray]
  })

  // return deep update data, without link
  return JSON.parse(JSON.stringify(matrixArray))
}

export { generateTableConfig }
