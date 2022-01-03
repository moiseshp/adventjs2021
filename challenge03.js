/*
Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:
 */

const letter = 'bici coche balón _playstation bici          coche peluche'

const listGifts = (letter) => {
  const invalidGiftSuffix = '_'
	const allGifts = letter.split(' ').filter(item => !!item)
  const giftsAvailable = allGifts.filter(item => item.charAt(0) !== invalidGiftSuffix)

  let gifts = []
  giftsAvailable.forEach(name => {
    const gift = gifts.find(item => item.name === name)
    if(!gift) {
      gifts.push({ name, quantity: 1 })
      return
    }

    gifts = gifts.map(({ name, quantity }) => ({
      name,
      quantity: name === gift.name ? ++quantity : quantity
    }))
  })

  return gifts.reduce((items, item) => ({
    ...items,
    [item.name]: item.quantity
  }), {})
}

console.info(listGifts(letter))
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/