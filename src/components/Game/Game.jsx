import styles from './Game.module.css';
import { Component } from 'react'
import Board from '../Board/Board';
import Scoreboard from '../ScoreBoard/ScoreBoard';
import StatusBoard from '../StatusBoard/StatusBoard';
import RestartButton from '../RestartButton/RestartButton';
import calculateGameResult from '../../utils/calculateGameResult';
import BackButton from '../BackButton/BackButton';

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
  turn = gameCharacters[0];
  stopGameFlag = false;
  //LOCALSTORAGE???

  handleClick = (adr) => {
    let newBoardState = [[...this.state.boardState[0]], [...this.state.boardState[1]], [...this.state.boardState[2]]];
    if (this.state.boardState[adr[0]][adr[2]] === null && calculateGameResult(this.state.boardState)[0] === 0){
      newBoardState[adr[0]][adr[2]] = this.turn;
      this.turn = (gameCharacters.indexOf(this.turn) ?  gameCharacters[0] : gameCharacters[1]);
    }
    let winner = calculateGameResult(newBoardState)[0];
    if (winner && winner !== 3 && !this.stopGameFlag){
      this.stopGameFlag = true;
      let newScore = [...this.state.score];
      newScore[gameCharacters.indexOf(winner)] += 1;
      this.setState({ score: newScore, boardState: newBoardState });
    } else {
      this.setState({ ...this.state, boardState: newBoardState });
    }
  }

  handleRestart = () => {
    this.setState({ ...this.state,
                    boardState: [[null, null, null],
                                  [null, null, null],
                                  [null, null, null]]});
    this.stopGameFlag = false;
  }

  changeScore = (num) => {
    let newScore = [...this.state.score];
    newScore[num] += 1;
    this.setState({...this.state, score: newScore});
  }

  render() {
    let winner = calculateGameResult(this.state.boardState)[0];
    let gameColorScheme = calculateGameResult(this.state.boardState)[1];
    let status = '';
    if (winner === gameCharacters[0] || winner === gameCharacters[1]) {
      status = "The Winner Is " + winner;
    } else if (winner === 0) {
      status = "Next Turn: " + this.turn;
    } else {
      status = "It's a Draw";
    }

    return (
      <div className={styles.game}>
        <BackButton />
        <Scoreboard gameCharacters={gameCharacters} score={this.state.score}/>
        <StatusBoard status={status}/>
        <Board onClick={(i) => {this.handleClick(i)}} state={this.state} gameColorScheme={gameColorScheme}/>
        { winner ? <RestartButton onClick={() => this.handleRestart()}/> 
                  : <div style={{height: '50px', marginTop: '30px'}}></div> }
      </div>
    );
  }
}
