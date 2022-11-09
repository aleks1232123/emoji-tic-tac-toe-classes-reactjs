import { Component } from 'react'
import Cell from '../Cell/Cell'

export default class BoardRow extends Component {
  
  render() {
    return (
      <div className="board-row" style={{display: 'flex', flexDirection: 'row'}}>
        {[0,1,2].map((num) => <Cell onClick={(i) => {this.props.onClick(i)}} 
        value = {this.props.value[num]}
        adr = {this.props.row + '-' + num}
        key = {this.props.row + '-' + num}
        gameColorScheme = {this.props.gameColorScheme[num]} />)}
      </div>
    )
  }
}

