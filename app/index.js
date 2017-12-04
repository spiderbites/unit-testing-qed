import React, { Component } from 'react'
import Box from './components/box'
import Row from './components/row'
import './app.css'
import { down, up, left, right, checkWin } from './functions'
import { MAX_POSITION } from './constants'

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
    return Array.from({ length: MAX_POSITION + 1 }, () =>
      Array.from({ length: MAX_POSITION + 1 })
    )
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
      this.moveJp(down(this.state.jp))
    } else if (e.key === 'ArrowRight') {
      this.moveJp(right(this.state.jp))
    } else if (e.key === 'ArrowLeft') {
      this.moveJp(left(this.state.jp))
    } else if (e.key === 'ArrowUp') {
      this.moveJp(up(this.state.jp))
    }
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
    this.setState(
      {
        board: newBoard,
        jp: { x, y }
      },
      this.checkWinner
    )
  }

  getRandomCoords() {
    const x = Math.floor(Math.random() * MAX_POSITION)
    const y = Math.floor(Math.random() * MAX_POSITION)
    return [x, y]
  }

  checkWinner() {
    if (checkWin(this.state.jp, this.state.goal)) {
      setTimeout(() => {
        this.reset()
        alert('You did it buddy')
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
