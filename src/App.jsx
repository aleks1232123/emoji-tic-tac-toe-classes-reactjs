import './App.css';
import { Component } from 'react'
import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';
import StatusBoard from './components/StatusBoard/StatusBoard';
import RestartButton from './components/RestartButton/RestartButton';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {  boardState: [[null, null, null],
                                [null, null, null],
                                [null, null, null]],
                    gameStatus: this.gameCharacters[0], 
                    score: [0,0],
                  };
  }

  charactersList = ['👻', '💀', '😈', '👹', '🤡', '💩', '👽', '👾', '🤖', '🎃'];
  gameCharacters = ['👻', '💀'];
  gameColorScheme = [[null, null, null], [null, null, null], [null, null, null]];

  handleClick = (adr) => {
    let newBoardState = [[...this.state.boardState[0]], [...this.state.boardState[1]], [...this.state.boardState[2]]];
    let newGameStatus = this.state.gameStatus;
    if (this.state.boardState[adr[0]][adr[2]] === null && this.calculateWinner(this.state.boardState) === 1){
      newBoardState[adr[0]][adr[2]] = this.state.gameStatus;
      newGameStatus = this.state.gameStatus === this.gameCharacters[0] ?  this.gameCharacters[1] : this.gameCharacters[0];
    }
    this.setState({ ...this.state, boardState: newBoardState, gameStatus: newGameStatus });
  }

  handleRestart = () => {
    this.setState({ ...this.state,
                    boardState: [[null, null, null],
                                  [null, null, null],
                                  [null, null, null]],
                    gameStatus: this.gameCharacters[0]});
    this.gameColorScheme = [[null, null, null], [null, null, null], [null, null, null]];
  }

  changeScore = (num) => {
    let newScore = [...this.state.score];
    newScore[num] += 1;
    this.setState({...this.state, score: newScore});
  }

  calculateWinner = (boardState) => {
    let nullCounter = 0;
    for (let i = 0; i < boardState.length; i++){
      if (boardState[i][0] && boardState[i][0] === boardState[i][1] && boardState[i][0] === boardState[i][2]){
        this.gameColorScheme[i][0] = this.gameColorScheme[i][1] = this.gameColorScheme[i][2] = 1;
        //this.changeScore(this.gameCharacters.indexOf(boardState[i][0]));
        return boardState[i][0];
      }
      if (boardState[0][i] && boardState[0][i] === boardState[1][i] && boardState[0][i] === boardState[2][i]){
        this.gameColorScheme[0][i] = this.gameColorScheme[1][i] = this.gameColorScheme[2][i] = 1;
        //this.changeScore(this.gameCharacters.indexOf(boardState[0][i]));
        return boardState[0][i];
      }
      if (boardState[0][i] === null || boardState[1][i] === null || boardState[2][i] === null){
        nullCounter += 1;
      }
    }
    if (boardState[0][0] && boardState[0][0] === boardState[1][1] && boardState[0][0] === boardState[2][2]){
      this.gameColorScheme[0][0] = this.gameColorScheme[1][1] = this.gameColorScheme[2][2] = 1;
      //this.changeScore(this.gameCharacters.indexOf(boardState[0][0]));
      return boardState[0][0];
    }
    if (boardState[0][2] && boardState[0][2] === boardState[1][1] && boardState[0][2] === boardState[2][0]){
      this.gameColorScheme[0][2] = this.gameColorScheme[1][1] = this.gameColorScheme[2][0] = 1;
      //this.changeScore(this.gameCharacters.indexOf(boardState[0][2]));
      return boardState[0][2];
    }
    console.log(nullCounter);
    if (nullCounter > 0) return 1 //продолжение игры
    else return 0;
  }

  render() {

    const winner = this.calculateWinner(this.state.boardState);
    let status;
    if (winner === this.gameCharacters[0] || winner === this.gameCharacters[1]) {
      status = 'The Winner Is ' + winner;
      //console.log(this.gameColorScheme);
    } else if (winner === 1) {
      status = "Next Turn: " + (this.state.gameStatus);
      //console.log(this.props.gameColorScheme);
    } else {
      status = "It's a Draw";
    }
    console.log(status);

    // while (true){
    //   let firstChar = Math.round(Math.random()*(this.charactersList.length - 1));
    //   let secChar = Math.round(Math.random()*(this.charactersList.length - 1));
    //   if (firstChar !== secChar){
    //     this.gameCharacters.push(this.charactersList[firstChar], this.charactersList[secChar]);
    //     break;
    //   };
    //   continue;
    // }

    return (
      <div className="App">
        <Scoreboard score={this.state.score}/>
        <StatusBoard status={status}/>
        <Board characters={this.gameCharacters} onClick={(i) => {this.handleClick(i)}} state={this.state} gameColorScheme={this.gameColorScheme}/>
        <RestartButton winner={winner} onClick={() => this.handleRestart()}/>
      </div>
    );
  }

}
