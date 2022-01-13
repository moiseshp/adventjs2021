/** https://adventjs.dev/challenges/12 */

const getMinJump = (obstacles) => {
  const MAX_STEP = Math.max(...obstacles) + 1
  const steps = [...new Array(MAX_STEP).keys()]
  const road = steps.map(step => ({ step, obstacle: !!obstacles.includes(step) }))
  const allJumps = steps.map(step => step + 1)

  let minJump = 0
  allJumps.every(jump => {
    minJump = jump
    const hasObstacle = road.find(item => !(item.step % jump) && item.obstacle)
    return !!hasObstacle
  })

  return minJump
}

const test = [
  [14, 10, 8, 2, 3, 6], // -> 9
  [5, 3, 6, 7, 9], // -> 4
  [2, 4, 6, 8, 10], // -> 7
  [1, 2, 3, 5], // -> 4
  [3, 7, 5], // ->2
  [9, 5, 1], // ->2
]

test.forEach(item => console.info(getMinJump(item)))