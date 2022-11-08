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
  const newArray = word.split('').map((item, index) => {
    if (hitWord[index] === word[index]) {
      return { hit: true }
    } else if (hitWord[index] !== word[index] && hitWord.includes(item)) {
      return { coincidence: true }
    } else if (!hitWord.includes(item)) {
      return { missing: true }
    }
  })

  let newConfig = JSON.parse(JSON.stringify(config))
  newConfig = refactorConfig(newConfig, newArray)

  return newConfig
}

/**
 * @description refactor config with params
 * @param {ITableLine} newConfig
 * @param {Array<any>} newArray
 * @return {ITableLine}
 */
const refactorConfig = (newConfig: ITableLine, newArray: Array<any>) => {
  for (let i = 0; i < Object.keys(newConfig).length; i++) {
    Object.values(newConfig)[i].map((item, index) => {
      if (item.coincidence || item.missing || item.missing) {
        return item
      } else if (item.name.length === 0) {
        return item
      } else if (newArray[index].hit) {
        item.hit = true
      } else if (newArray[index].coincidence) {
        item.coincidence = true
      } else if (newArray[index].missing) {
        item.missing = true
      }
      return item
    })
  }
  return newConfig
}

export { generateTableConfig, updateTableConfig }
