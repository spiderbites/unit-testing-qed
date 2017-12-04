// This function has a bug! Complete the tests in the find-buggy.test.js file
// to find the bug, then come back here and make everything go from 🚨 to 💚

/**
 * Find and return the first element in an array for which
 * the given function returns a truthy value.
 *
 * @param {any} array - The array to search
 * @param {any} fn - The function to apply to array elements
 * @returns The first element in the array for which the function returns a truthy value, or undefined if no element is found.
 */
function find(array, fn) {
  for (let i = 0; i < array.length - 1; i++) {
    if (fn(array[i])) {
      return array[i]
    }
  }
  return undefined
}

export default find
