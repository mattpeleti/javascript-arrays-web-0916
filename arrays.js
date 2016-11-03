var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array, element){
 const newarray = [element, ...array]
 return newarray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function addElementToEndOfArray(array, element){
  const newarray = [...array, element]
  return newarray
}

function accessElementInArray(array, index){
  return array[index]
}

function removeElementFromBeginningOfArray(array, element){
  array.shift(element)
  return array
}

function removeElementFromEndOfArray(array, element){
  array.pop(element)
  return array
}
