/** https://adventjs.dev/challenges/14 */

const missingReindeer = (ids) => {
  const TOTAL_REINDEERS = 100
  const reindeers = [...new Array(TOTAL_REINDEERS).keys()]
  const orderIds = ids.sort((a, b) => a - b)
  let missingReindeerId = null
  reindeers.every(id => {
    missingReindeerId = id
    return orderIds.includes(id)
  })
  return missingReindeerId
}

const test = [
  [0, 2, 3], // -> 1
  [5, 6, 1, 2, 3, 7, 0], // -> 4
  [0, 1], // -> 2 ¡es el último el que falta!
  [3, 0, 1], // -> 2
  [9, 2, 3, 5, 6, 4, 7, 0, 1], // -> 8
  [0] // -> 1 ¡es el último el que falta!
]

test.forEach(item => console.info(missingReindeer(item)))