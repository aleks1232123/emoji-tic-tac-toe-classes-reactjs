import './App.css';
import { Component } from 'react'
import Board from './components/Board/Board';
import Scoreboard from './components/ScoreBoard/ScoreBoard';
import StatusBoard from './components/StatusBoard/StatusBoard';
import RestartButton from './components/RestartButton/RestartButton';
import calculateGameResult from './utils/calculateGameResult';

const charactersList = ['👻', '💀', '😈', '👹', '🤡', '💩', '👽', '👾', '🤖', '🎃'];
const gameCharacters = [];
while (true){
      let firstChar = Math.round(Math.random()*(charactersList.length - 1));
      let secChar = Math.round(Math.random()*(charactersList.length - 1));
      if (firstChar !== secChar){
        gameCharacters.push(charactersList[firstChar], charactersList[secChar]);
        break;
      };
      continue;
}

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {  boardState: [[null, null, null],
                                [null, null, null],
                                [null, null, null]], 
                    score: [0,0],
                  };
  }

  gameColorScheme = [[null, null, null], [null, null, null], [null, null, null]];
  turn = gameCharacters[0];
  //status = "Next Turn: " + this.turn;
  //winner = 0;

  handleClick = (adr) => {
    let newBoardState = [[...this.state.boardState[0]], [...this.state.boardState[1]], [...this.state.boardState[2]]];
    if (this.state.boardState[adr[0]][adr[2]] === null && calculateGameResult(this.state.boardState) === 0){
      newBoardState[adr[0]][adr[2]] = this.turn;
      this.turn = this.turn === gameCharacters[0] ?  gameCharacters[1] : gameCharacters[0];
    }
    this.setState({ ...this.state, boardState: newBoardState });
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

  // componentDidUpdate = (prevProps, prevState, snapshot) => {
  //   if (this.winner ===  gameCharacters[0]){
  //     let newScore = [this.state.score[0] + 1, this.state.score[1]];
  //     this.setState({ ...this.state, score: newScore });
  //   } else if (this.winner ===  gameCharacters[0]){
  //     let newScore = [this.state.score[0], this.state.score[1] + 1];
  //     this.setState({ ...this.state, score: newScore });
  // }
//}

  render() {
    let winner = calculateGameResult(this.state.boardState, this.gameColorScheme);
    let status = '';
    if (winner === gameCharacters[0] || winner === gameCharacters[1]) {
      status = "The Winner Is " + this.winner;
    } else if (winner === 0) {
      status = "Next Turn: " + this.turn;
    } else {
      status = "It's a Draw";
    }

    console.log(winner)
    return (
      <div className="App">
        <Scoreboard gameCharacters={gameCharacters} score={this.state.score}/>
        <StatusBoard status={status}/>
        <Board onClick={(i) => {this.handleClick(i)}} state={this.state} gameColorScheme={this.gameColorScheme}/>
        { winner ? <RestartButton onClick={() => this.handleRestart()}/> : null }
      </div>
    );
  }
}
