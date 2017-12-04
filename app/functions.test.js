import { down, up, left, right, checkWin } from './functions'

import { MAX_POSITION } from './constants'

let jp, goal

describe('game functions', () => {
  beforeEach(() => {
    jp = { x: 3, y: 3 }
    goal = { x: 1, y: 1 }
  })

  describe('down', () => {
    it("should increase jp's y co-ordinate by one", () => {
      const oldY = jp.y
      const newPosition = down(jp)
      const newY = newPosition.y
      expect(newY).toEqual(oldY + 1)
    })

    it("should not change jp's x co-ordinate", () => {
      const oldX = jp.x
      const newPosition = down(jp)
      const newX = newPosition.x
      expect(newX).toEqual(oldX)
    })

    it("should not change jp's position if he is at the bottom edge of the board", () => {
      jp.y = MAX_POSITION
      const oldY = jp.y
      const newPosition = down(jp)
      const newY = newPosition.y
      expect(newY).toEqual(oldY)
    })
  })

  describe('up', () => {
    it.skip("should decrease jp's y co-ordinate by one", () => {
      // ADD TEST HERE
    })

    it.skip("should not change jp's x co-ordinate", () => {
      // ADD TEST HERE
    })

    it.skip("should not change jp's position if he is at the top edge of the board", () => {
      // ADD TEST HERE
    })
  })

  describe('left', () => {
    it.skip("should decrease jp's x co-ordinate by one", () => {
      // ADD TEST HERE
    })

    it.skip("should not change jp's y co-ordinate", () => {
      // ADD TEST HERE
    })

    it.skip("should not change jp's position if he is at the left edge of the board", () => {
      // ADD TEST HERE
    })
  })

  describe('right', () => {
    it.skip("should increase jp's x co-ordinate by one", () => {
      // ADD TEST HERE
    })

    it.skip("should not change jp's y co-ordinate", () => {
      // ADD TEST HERE
    })

    it.skip("should not change jp's position if he is at the right edge of the board", () => {
      // ADD TEST HERE
    })
  })

  describe('checkWin', () => {
    it.skip("should return true if jp's co-ordinates are equal to the goal's co-ordinates", () => {
      // ADD TEST HERE
    })

    it.skip("should return false if jp's y co-ordinate is not equal to the goal's y-cordinate", () => {
      // ADD TEST HERE
    })

    it.skip("should return false if jp's x co-ordinate is not equal to the goal's x-cordinate", () => {
      // ADD TEST HERE
    })
  })
})
