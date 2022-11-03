import { ABC } from '@configurations'
import { IKeyboardLine } from '@store/types/game/Interfaces'

/**
 * @description generate config for keyboard
 */
const generateKeyboardConfig = (): IKeyboardLine => {
  const config = {
    coincidence: false,
    missing: false,
    hit: false,
  }

  // deep clone object
  const temp = JSON.parse(JSON.stringify(ABC))

  for (let line in temp) {
    temp[line].forEach((item, index) => {
      temp[line][index] = { ...item, ...config }
    })
  }
  return temp
}

/**
 * @description update keyboard config
 * @param {string} word
 * @param {string} hitWord
 * @param {IKeyboardLine} config
 * @return {IKeyboardLine}
 */
const updateKeyboardConfig = (
  word: string,
  hitWord: string,
  config: IKeyboardLine,
) => {
  const hitArray = word.split('').filter((item, index) => {
    return hitWord[index] === word[index]
  })
  const coincidenceArray = word.split('').filter((item) => {
    return hitWord.includes(item) && !hitArray.includes(item)
  })
  const missingArray = word.split('').filter((item) => {
    return !hitWord.includes(item)
  })
  const newConfig = JSON.parse(JSON.stringify(config))
  newConfig.first = refactorConfig(
    newConfig,
    hitArray,
    coincidenceArray,
    missingArray,
    'first',
  )
  newConfig.second = refactorConfig(
    newConfig,
    hitArray,
    coincidenceArray,
    missingArray,
    'second',
  )
  newConfig.third = refactorConfig(
    newConfig,
    hitArray,
    coincidenceArray,
    missingArray,
    'third',
  )
  newConfig.fourth = refactorConfig(
    newConfig,
    hitArray,
    coincidenceArray,
    missingArray,
    'fourth',
  )

  return newConfig
}

/**
 * @description refactor config with params
 * @param {IKeyboardLine} newConfig
 * @param {Array<string>} hitArray
 * @param {Array<string>} coincidenceArray
 * @param {Array<string>} missingArray
 * @param {string} type
 * @return {IKeyboardLine}
 */
const refactorConfig = (
  newConfig: IKeyboardLine,
  hitArray: Array<string>,
  coincidenceArray: Array<string>,
  missingArray: Array<string>,
  type: string,
) => {
  newConfig[type] = newConfig[type].map((item) => {
    if (hitArray.includes(item.name)) {
      item.hit = true
    }
    if (coincidenceArray.includes(item.name)) {
      item.coincidence = true
    }
    if (missingArray.includes(item.name)) {
      item.missing = true
    }
    return item
  })
  return newConfig[type]
}

export { generateKeyboardConfig, updateKeyboardConfig }
