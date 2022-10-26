import { Component } from 'react'
import Cell from '../Cell/Cell'

export default class BoardRow extends Component {
  
  render() {
    return (
      <div className="board-row">
        <Cell value={this.props.row*3 + 1} />
        <Cell value={this.props.row*3 + 2} />
        <Cell value={this.props.row*3 + 3} />
      </div>
    )
  }
}

