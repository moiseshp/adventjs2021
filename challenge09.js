/**
En la f谩brica de Papa No茅l 馃巺 se acerca el d铆a especial... y todav铆a tenemos un mont贸n de cosas por contar. 馃槄

Por suerte a Mark Zucktheelf 馃 se le ha ocurrido crear una funci贸n que permita agrupar un array, que puede ser de valores u objetos, a trav茅s de una funci贸n o de una propiedad.

Como ves, la funci贸n groupBy recibe una colecci贸n (array) y una funci贸n o una propiedad, y devuelve un objeto con claves que son los valores de la funci贸n ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.

La dificultad del reto est谩 m谩s en comprender la funci贸n que en la implementaci贸n. 隆Suerte!.
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
