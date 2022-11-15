import { Component } from 'react'
import BoardRow from '../BoardRow/BoardRow'
import styles from './Board.module.css'

export default class Board extends Component {

  render() {
    return (
      <div className={styles.board}>
        {[0,1,2].map((num) => 
          <BoardRow
            onClick={(i) => {this.props.onClick(i)}}
            value = {this.props.state.boardState[num]}
            row = {num}
            key = {num}
            gameColorScheme = {this.props.gameColorScheme[num]}
          />
        )}
      </div>
    )
  }
}

