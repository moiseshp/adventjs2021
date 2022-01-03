/*
  Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
 */


const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

const contarOvejas = (ovejas) => {
  const filterFn = ({ color, name }) => color === 'rojo' && /a.*n|n.*a/i.test(name) 
  return ovejas.filter(filterFn)
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

/*
  Rpta correcta:
  [
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' }
  ]
 */