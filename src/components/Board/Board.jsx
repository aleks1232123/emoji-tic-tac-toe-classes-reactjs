import { Component } from 'react'
import BoardRow from '../BoardRow/BoardRow'

export default class Board extends Component {

  constructor(props){
    super(props);
    this.state = { boardState: [[null, null, null],
                                [null, null, null],
                                [null, null, null]],
                    playerStatus: 'O'};
  }

  handleClick = (adr) => {
    console.log(adr[0], adr[2]);
    let newBoardState = [[...this.state.boardState[0]], [...this.state.boardState[1]], [...this.state.boardState[2]]];
    let newPlayerStatus = this.state.playerStatus;
    if (this.state.boardState[adr[0]][adr[2]] === null){
      newBoardState[adr[0]][adr[2]] = this.state.playerStatus;
      newPlayerStatus = this.state.playerStatus === 'O' ?  'X' : 'O';
    }
    this.setState({ boardState: newBoardState, playerStatus: newPlayerStatus });
  }

  render() {
    return (
      <div>
        <div className='boardBorder'
              style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{fontSize: '24px', marginBottom: '20px'}}>
            {this.state.playerStatus}
          </div>
          <div className='board'>
            {[0,1,2].map((num) => <BoardRow onClick={(i) => this.handleClick(i)} value = {this.state.boardState[num]} row = {num} key = {num}/>)}
          </div>
        </div>
      </div>
    )
  }
}

