import { ILine, ITableLine } from '@store/types/game/Interfaces'
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

/**
 * @description update table config
 * @param {string} word
 * @param {string} hitWord
 * @param {ITableLine} config
 * @return {ITableLine}
 */
const updateTableConfig = (
  word: string,
  hitWord: string,
  config: ITableLine,
) => {
  const hitArray = word.split('').filter((item, index) => {
    return hitWord[index] === word[index]
  })
  const missingArray = word.split('').filter((item) => {
    return !hitWord.includes(item)
  })
  const coincidenceArray = word.split('').filter((item) => {
    return hitWord.includes(item) && !hitArray.includes(item)
  })

  let newConfig = JSON.parse(JSON.stringify(config))
  newConfig = refactorConfig(
    newConfig,
    hitArray,
    coincidenceArray,
    missingArray,
  )

  return newConfig
}

/**
 * @description refactor config with params
 * @param {ITableLine} newConfig
 * @param {Array<string>} hitArray
 * @param {Array<string>} coincidenceArray
 * @param {Array<string>} missingArray
 * @return {ITableLine}
 */
const refactorConfig = (
  newConfig: ITableLine,
  hitArray: Array<string>,
  coincidenceArray: Array<string>,
  missingArray: Array<string>,
) => {
  for (let i = 0; i < Object.keys(newConfig).length; i++) {
    Object.values(newConfig)[i].map((item) => {
      if (item.coincidence || item.missing || item.missing) {
        return item
      } else if (hitArray.includes(item.name)) {
        item.hit = true
      } else if (coincidenceArray.includes(item.name)) {
        item.coincidence = true
      } else if (missingArray.includes(item.name)) {
        item.missing = true
      }
      return item
    })
  }
  return newConfig
}

export { generateTableConfig, updateTableConfig }
