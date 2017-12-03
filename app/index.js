import React, { Component } from 'react'
import Box from './box'
import Row from './row'
import './app.css'
import { down, up, left, right } from './functions'
import { SIZE } from './constants'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: this.initBoard(),
      jp: {},
      goal: {}
    }
    this.keydown = this.keydown.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keydown)
    this.randomlyPlace('jp')
    this.randomlyPlace('goal')
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydown)
  }

  initBoard() {
    return Array.from({ length: SIZE }, () => Array.from({ length: SIZE }))
  }

  reset() {
    this.setState({
      board: this.initBoard()
    })
    this.randomlyPlace('jp')
    this.randomlyPlace('goal')
  }

  keydown(e) {
    if (e.key === 'ArrowDown') {
      this.moveDown()
    } else if (e.key === 'ArrowRight') {
      this.moveRight()
    } else if (e.key === 'ArrowLeft') {
      this.moveLeft()
    } else if (e.key === 'ArrowUp') {
      this.moveUp()
    }
  }

  moveDown() {
    this.moveJp(down(this.state.jp))
  }

  moveUp() {
    this.moveJp(up(this.state.jp))
  }

  moveRight() {
    this.moveJp(right(this.state.jp))
  }

  moveLeft() {
    this.moveJp(left(this.state.jp))
  }

  randomlyPlace(thing) {
    const newBoard = this.state.board.slice()
    const [x, y] = this.getRandomCoords()
    newBoard[x][y] = thing
    this.setState({
      board: newBoard,
      [thing]: { x, y }
    })
  }

  moveJp({ x, y }) {
    const newBoard = this.state.board.slice()
    const { x: prevX, y: prevY } = this.state.jp
    newBoard[prevX][prevY] = undefined
    newBoard[x][y] = 'jp'
    this.setState({
      board: newBoard,
      jp: { x, y }
    })
  }

  getRandomCoords() {
    const x = Math.floor(Math.random() * (SIZE - 1))
    const y = Math.floor(Math.random() * (SIZE - 1))
    return [x, y]
  }

  weHaveAWeiner() {
    return (
      this.state.jp.x !== undefined &&
      this.state.jp.x === this.state.goal.x &&
      this.state.jp.y === this.state.goal.y
    )
  }

  componentDidUpdate() {
    if (this.weHaveAWeiner()) {
      setTimeout(() => {
        alert('You did it buddy')
        this.reset()
      }, 100)
    }
  }

  render() {
    return (
      <div className="app">
        {this.state.board.map((row, i) => {
          return <Row row={row} key={i} />
        })}
      </div>
    )
  }
}

export default App
