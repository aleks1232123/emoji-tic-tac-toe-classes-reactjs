import { Component } from 'react'
import BoardRow from '../BoardRow/BoardRow'

export default class Board extends Component {

  render() {

    return (
        <div className='boardBorder'
              style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div className='board'>
            {[0,1,2].map((num) => <BoardRow onClick={(i) => {this.props.onClick(i)}} value = {this.props.state.boardState[num]} row = {num} key = {num} gameColorScheme = {this.props.gameColorScheme[num]}/>)}
          </div>
        </div>
    )
  }
}

