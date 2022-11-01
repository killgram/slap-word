/**
 * @description check word of day game possibility
 * @param {number} date
 * @return {boolean}
 */
const gamePossibility = (date?: number): boolean => {
  if (!date) {
    return true
  }
  const currentDate = new Date().getDate()
  const lastDate = new Date(date).getDate()
  return currentDate !== lastDate
}

export { gamePossibility }
