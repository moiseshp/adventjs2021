/**
Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto.

Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones.Lo importante es buscar que el producto está en los almacenes.
*/

const contains = (store, product) => {
  const searchItem = (store) => (
    Object.keys(store).some(key => {
      const rack = store[key]
      const isProduct = typeof rack === 'string'
      if (isProduct) {
        return rack === product
      }
      return searchItem(rack)
    })  
  )

  return searchItem(store)
}

const test = [
  {
    store: {
      'estanteria1': {
        'cajon1': {
          'producto1': 'coca-cola',
          'producto2': 'fanta',
          'producto3': 'sprite'
        }
      },
      'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
          'producto1': 'pantalones',
          'producto2': 'camiseta' // <- ¡Está aquí!
        }
      }
    },
    product: 'camiseta'
  },
  {
    store: {
      'baul': {
        'fondo': {
          'objeto': 'cd-rom',
          'otro-objeto': 'disquette',
          'otra-cosa': 'mando'
        }
      }
    },
    product: 'gameboy'
  }
]
// contains(store1, 'camiseta') // true
// contains(store2, 'gameboy') // false
test.forEach(({ store, product }) => console.info(contains(store, product)))
