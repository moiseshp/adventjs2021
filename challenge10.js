/** https://adventjs.dev/challenges/10 */

const getCoins = (change) => {
  const coins = [1, 2, 5, 10, 20, 50]
  let newChange = change
  const result = []
  Object.keys(coins).reverse().forEach(key => {
    result[key] = 0
    const coin = coins[key]
    if (coin > newChange) return

    const coinsAmount = Math.floor(newChange / coin)
    newChange = newChange - coin * coinsAmount
    result[key] = coinsAmount
  })
  return result
}

const test = [
  51, // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
  3, // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
  5, // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
  16, // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
  100 // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
]

test.forEach(item => console.info(getCoins(item)))