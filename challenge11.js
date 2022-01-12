/** https://adventjs.dev/challenges/11 */

const shouldBuyFidelity = (times) => {
  const PRICES = {
    FIDELITY_CARD: 250,
    TICKET: 12,
    DISCOUNT: 0.75
  }

  const items = [...new Array(times).keys()]
  let newPrice = PRICES.TICKET
  let payTotal = PRICES.FIDELITY_CARD
  items.forEach(() => {
    newPrice = newPrice * PRICES.DISCOUNT
    payTotal += newPrice
  })
  const discountedTicket = payTotal / times
  return PRICES.TICKET > discountedTicket 
}

const test = [
  1, // false -> Mejor comprar tickets de un sólo uso
  100 // true -> Mejor comprar tarjeta fidelidad
]

test.forEach(item => console.info(shouldBuyFidelity(item)))