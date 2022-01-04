/**
¡Es hora de poner el árbol de navidad en casa! 🎄
Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____

Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.
Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__

Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
*/

const createXmasTree = (height) => {
  const lineBreak = '\n'
  const build = (amount, symbol = '') => [...new Array(amount).keys()].map(() => symbol)
  const drawStep = (symbolsAmount, paddingAmount, symbol = '*') => {
    const padding = build(paddingAmount, '_')
    const symbols = build(symbolsAmount, symbol)
    const step = [
      ...padding,
      ...symbols,
      ...padding
    ]
    return step.join('')
  }

  const drawTree = () => {
    const steps = build(height)
    let initStep = 1
    let symbols = 1
    const symbolStep = 2
    const tree = []

    steps.forEach(() => {
      const padding = height - initStep
      const step = drawStep(symbols, padding)
      tree.push(`${step}${lineBreak}`)
      symbols+=symbolStep
      initStep++
    })

    return tree.join('')
  }

  const drawTrunk = () => {
    const trunkSteps = 2
    const steps = build(trunkSteps)
    const symbols = 1
    const padding = height - symbols
    const trunk = []

    steps.forEach(() => {
      const step = drawStep(symbols, padding, '#')
      trunk.push(`${step}${lineBreak}`)
    })
    return trunk.join('')
  }

  const xmasTree = `${drawTree()}${drawTrunk()}`

  const removeLastLineBreak = (tree) => {
    const xmas = tree.lastIndexOf(lineBreak)
    return tree.substring(xmas, -1)
  }

  // ¡Y no olvides también poner los turrones!
  return removeLastLineBreak(xmasTree)
}

console.info(createXmasTree(5))