import { Component } from 'react'
import BoardRow from '../BoardRow/BoardRow'

export default class Board extends Component {

  constructor(props){
    super(props);
    this.state = { boardState: [[null, null, null],
                                [null, null, null],
                                [null, null, null]],
                    gameStatus: 'X'};
  }

  gameColorScheme = [[null, null, null], [null, null, null], [null, null, null]];

  handleClick = (adr) => {
    let newBoardState = [[...this.state.boardState[0]], [...this.state.boardState[1]], [...this.state.boardState[2]]];
    let newGameStatus = this.state.gameStatus;
    if (this.state.boardState[adr[0]][adr[2]] === null && this.calculateWinner(this.state.boardState) === 1){
      newBoardState[adr[0]][adr[2]] = this.state.gameStatus;
      newGameStatus = this.state.gameStatus === 'O' ?  'X' : 'O';
    }
    this.setState({ boardState: newBoardState, gameStatus: newGameStatus });
  }

  handleRestart = () => {
    this.setState({ boardState: [ [null, null, null],
                                  [null, null, null],
                                  [null, null, null]],
                    gameStatus: 'X'});
  }

  calculateWinner = (boardState) => {
    let nullCounter = 0;
    for (let i = 0; i < boardState.length; i++){
      if (boardState[i][0] && boardState[i][0] === boardState[i][1] && boardState[i][0] === boardState[i][2]){
        this.gameColorScheme[i][0] = this.gameColorScheme[i][1] = this.gameColorScheme[i][2] = 1;
        return boardState[i][0];
      }
      if (boardState[0][i] && boardState[0][i] === boardState[1][i] && boardState[0][i] === boardState[2][i]){
        this.gameColorScheme[0][i] = this.gameColorScheme[1][i] = this.gameColorScheme[2][i] = 1;
        return boardState[0][i];
      }
      if (boardState[0][i] === null || boardState[1][i] === null || boardState[2][i] === null){
        nullCounter += 1;
      }
    }
    if (boardState[0][0] && boardState[0][0] === boardState[1][1] && boardState[0][0] === boardState[2][2]){
      this.gameColorScheme[0][0] = this.gameColorScheme[1][1] = this.gameColorScheme[2][2] = 1;
      return boardState[0][0];
    }
    if (boardState[0][2] && boardState[0][2] === boardState[1][1] && boardState[0][2] === boardState[2][0]){
      this.gameColorScheme[0][2] = this.gameColorScheme[1][1] = this.gameColorScheme[2][0] = 1;
      return boardState[0][2];
    }
    console.log(nullCounter);
    if (nullCounter > 0) return 1 //продолжение игры
    else return 0;
  }

  render() {

    const winner = this.calculateWinner(this.state.boardState);
    let status;
    if (winner === 'O'|| winner === 'X') {
      status = 'The Winner Is ' + winner;
      console.log(this.gameColorScheme);
    } else if (winner === 1) {
      status = "Next Turn: " + (this.state.gameStatus);
      console.log(this.gameColorScheme);
    } else {
      status = "It's a Draw";
    }

    return (
      <div>
        <div className='boardBorder'
              style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{fontSize: '24px', marginBottom: '20px'}}>
            <b>{status}</b>
          </div>
          <div className='board'>
            {[0,1,2].map((num) => <BoardRow onClick={(i) => this.handleClick(i)} value = {this.state.boardState[num]} row = {num} key = {num} gameColorScheme = {this.gameColorScheme[num]}/>)}
          </div>
          <div>{winner !== 1 ? (<button onClick={this.handleRestart} style={{marginTop: '20px'}}>RESTART</button>) : null}
          </div>
        </div>
      </div>
    )
  }
}

