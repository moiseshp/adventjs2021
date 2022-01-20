/** https://adventjs.dev/challenges/13 */

const wrapGifts = (gifts) => {
  if (!gifts.length) return []

  const wrapperAsterick = 1
  const maxWidth = [...new Array(gifts[0].length + wrapperAsterick * 2).keys()]

  const drawWrapper = () => {
    const astericks = []
    maxWidth.forEach(() => astericks.push('*'))
    return astericks.join('')
  }

  const blockGifts = []
  gifts.forEach(gift => blockGifts.push(`*${gift}*`))
  return [
    drawWrapper(),
    ...blockGifts,
    drawWrapper()
  ]
}

const test = [
  [],
  ["📷", "⚽️"],
  /* Resultado:
  [ '****',
    '*📷*',
    '*⚽️*',
    '****'
  ]
  */

  ["🏈🎸", "🎮🧸"],
  /* Resultado:
  [ '******',
    '*🏈🎸*',
    '*🎮🧸*',
    '******'
  ]
  */

  ["📷"],
  /* Resultado:
  [ '****',
    '*📷*',
    '****'
  ]
  */
]

test.forEach(item => console.info(wrapGifts(item)))