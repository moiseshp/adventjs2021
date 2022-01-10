/**
En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad.

Como ves, la función groupBy recibe una colección (array) y una función o una propiedad, y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.

La dificultad del reto está más en comprender la función que en la implementación. ¡Suerte!.
*/

const groupBy = (collection, it) => {
  const getKey = (value) => typeof it === 'function' ? it(value) : value[it]
  const response = {}
  collection.forEach(item => {
    const key = getKey(item)
    const items = response[key] || []
    response[key] = [...items, item]
  })
  return response
}

const test = [
  { collection: [6.1, 4.2, 6.3], it: Math.floor }, // { 6: [6.1, 6.3], 4: [4.2] }
  { collection: ['one', 'two', 'three'], it: 'length' }, // { 3: ['one', 'two'], 5: ['three'] }
  { collection: [{age: 23}, {age: 24}], it: 'age' }, // { 23: [{age: 23}], 24: [{age: 24}] }
  { collection: [1397639141184, 1363223700000], it: timestamp => new Date(timestamp).getFullYear() }, // { 2013: [1363223700000], 2014: [1397639141184] }
  { collection: [
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
  ], it: 'rating' }, 
  // { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
  //   9: [{ title: 'Clean Code', rating: 9 }],
  //   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
]

test.forEach(({ collection, it }) => console.info(groupBy(collection, it)))
