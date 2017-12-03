import { SIZE } from './constants'

const down = ({ x, y }) => {
  return {
    x: x,
    y: y + 1
  }
}

const up = ({ x, y }) => {
  return {
    x: x,
    y: y - 1
  }
}

const right = ({ x, y }) => {
  return {
    x: x + 1,
    y: y
  }
}

const left = ({ x, y }) => {
  return {
    x: x - 1,
    y: y
  }
}

const weHaveAWeiner = (jp, goal) => {
  return jp.x === goal.x && jp.y === goal.y
}

export { down, up, left, right }
