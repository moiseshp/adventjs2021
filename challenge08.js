/**
Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra. Ejm: btc y eth

Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura: doge y ada
*/

const maxProfit = (prices) => {
  const priceCopy = [...prices]
  let profit = 0
  prices.forEach(price => {
    const index = priceCopy.indexOf(price)
    priceCopy.splice(index, 1)
    priceCopy.forEach(item => {
      const newProfit = item - price
      if (newProfit > profit) {
        profit = newProfit
      }
    })
  })
  return profit || -1
}

const test = [
  { name: 'btc', prices: [39, 18, 29, 25, 34, 32, 5] }, // -> 16 (compra a 18, vende a 34)
  { name: 'eth', prices: [10, 20, 30, 40, 50, 60, 70] }, // -> 60 (compra a 10, vende a 70)
  { name: 'doge', prices: [18, 15, 12, 11, 9, 7] }, // -> -1 (no hay ganancia posible)
  { name: 'ada', prices: [3, 3, 3, 3, 3] }  // -> -1 (no hay ganancia posible)
]

test.forEach(({ prices }) => console.info(maxProfit(prices)))
