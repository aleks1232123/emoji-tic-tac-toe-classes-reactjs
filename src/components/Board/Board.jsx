import { Component } from 'react'
import BoardRow from '../BoardRow/BoardRow'

export default class Board extends Component {

  render() {
    return (
      <div className='boardBorder' style={{color: 'black'}}>
        <div className='board' style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <BoardRow row = {0}/>
          <BoardRow row = {1}/>
          <BoardRow row = {2}/>
        </div>
      </div>
    )
  }
}

