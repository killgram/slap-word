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

export { generateKeyboardConfig }
