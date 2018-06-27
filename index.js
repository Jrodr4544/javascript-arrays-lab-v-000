const app = "I don't do much."

<<<<<<< HEAD
var destructivelyAppendKitten = (name) => {
  return window.kittens.push(name)
}

var destructivelyPrependKitten = (name) => {
  return window.kittens.unshift(name)
}

var destructivelyRemoveLastKitten = () => {
  return window.kittens.pop()
}

var destructivelyRemoveFirstKitten = () => {
  return window.kittens.shift()
}

var appendKitten = (name) => {
  return [...window.kittens, name]
}

var prependKitten = (name) => {
  return [name, ...window.kittens]
}

var removeLastKitten = () => {
  var newArray = window.kittens.slice(0, window.kittens.length -1)
  return  newArray
}

var removeFirstKitten = () => {
  return window.kittens.slice(1)
}
=======
>>>>>>> a3adbb4900ba52ac03c6dc79c53b96ff00b6e554
