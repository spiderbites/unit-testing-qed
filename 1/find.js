function find(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      return array[i]
    }
  }
  return undefined
}

export default find
