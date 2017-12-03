import find from './find-buggy'

function isBiggerThan10(number) {
  return number > 10
}

describe('find', () => {
  test('can find the first item in an array', () => {
    const input = [11, 10, 9]
    const result = find(input, isBiggerThan10)
    expect(result).toBe(11)
  })

  test.skip('can find a middle item in an array', () => {
    // add test here
  })

  test.skip('can find the last item in an array', () => {
    // add test here
  })

  test.skip('returns the first value that matches the condition', () => {
    // add test here
  })

  test.skip('returns undefined if the element is not found', () => {
    // add test here
  })
})
