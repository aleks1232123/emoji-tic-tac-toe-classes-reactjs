import { Component } from 'react'
import BoardRow from '../BoardRow/BoardRow'

export default class Board extends Component {

  constructor(props){
    super(props);
    this.state = { boardState: Array(3).fill(Array(3).fill(null)),
                    playerStatus: 'Player 1 Turn'};
  }

  handleClick = (adr) => {
    console.log(adr[0], adr[2]);
    let newBoardState = [...this.state.boardState];
    newBoardState[+adr[0]][+adr[2]] = 'X';
    this.setState({ boardState: newBoardState });
    console.log(this.state.boardState[0])
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

