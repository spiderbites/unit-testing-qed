import find from './find'

function isBiggerThan10(number) {
  return number > 10
}

describe('find', () => {
  test('can find the first item in an array', () => {
    const input = [11, 10, 9]
    const result = find(input, isBiggerThan10)
    expect(result).toBe(11)
  })

  test('can find a middle item in an array', () => {
    const input = [4, 20, 5]
    const result = find(input, isBiggerThan10)
    expect(result).toBe(20)
  })

  test('can find the last item in an array', () => {
    const input = [4, 8, 12]
    const result = find(input, isBiggerThan10)
    expect(result).toBe(12)
  })

  test('returns the first value that matches the condition', () => {
    const input = [15, 14, 9]
    const result = find(input, isBiggerThan10)
    expect(result).toBe(15)
  })

  test('returns undefined if the element is not found', () => {
    const input = [1, 2, 3]
    const result = find(input, isBiggerThan10)
    expect(result).toBe(undefined)
  })
})
