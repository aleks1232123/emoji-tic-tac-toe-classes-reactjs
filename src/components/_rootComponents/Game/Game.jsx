import styles from "./Game.module.css";
import { Component } from "react";
import Board from "../../Board/Board";
import Scoreboard from "../../ScoreBoard/ScoreBoard";
import StatusBoard from "../../StatusBoard/StatusBoard";
import RestartButton from "../../RestartButton/RestartButton";
import calculateGameResult from "../../../utils/calculateGameResult";
import LinkButton from "../../LinkButton/LinkButton";
import generateGameStatus from "../../../utils/generateGameStatus";

const charactersList = [
  "👻",
  "💀",
  "😈",
  "👹",
  "🤡",
  "💩",
  "👽",
  "👾",
  "🤖",
  "🎃",
];
const gameCharacters = [];
while (true) {
  const firstChar = Math.round(Math.random() * (charactersList.length - 1));
  const secChar = Math.round(Math.random() * (charactersList.length - 1));
  if (firstChar !== secChar) {
    gameCharacters.push(charactersList[firstChar], charactersList[secChar]);
    break;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      score: [0, 0],
    };
  }
  turn = gameCharacters[0];
  stopGameFlag = false;
  //LOCALSTORAGE???

  handleNextTurn = (adr) => {
    let newBoardState = [
      [...this.state.boardState[0]],
      [...this.state.boardState[1]],
      [...this.state.boardState[2]],
    ];
    let gameResult = calculateGameResult(this.state.boardState).gameResult;
    if (
      this.state.boardState[adr[0]][adr[2]] === null &&
      gameResult === "Continue"
    ) {
      newBoardState[adr[0]][adr[2]] = this.turn;
      this.turn = gameCharacters.indexOf(this.turn)
        ? gameCharacters[0]
        : gameCharacters[1];
    }
    gameResult = calculateGameResult(this.state.boardState).gameResult;
    if (
      gameResult !== "Continue" &&
      gameResult !== "Draw" &&
      !this.stopGameFlag
    ) {
      this.stopGameFlag = true;
      let newScore = [...this.state.score];
      newScore[gameCharacters.indexOf(gameResult)] += 1;
      this.setState({ score: newScore, boardState: newBoardState });
    } else {
      this.setState({ ...this.state, boardState: newBoardState });
    }
  };

  handleRestart = () => {
    this.setState({
      ...this.state,
      boardState: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    });
    this.stopGameFlag = false;
  };

  changeScore = (num) => {
    let newScore = [...this.state.score];
    newScore[num] += 1;
    this.setState({ ...this.state, score: newScore });
  };

  render() {
    const { gameResult, winningCellsBacklight } = calculateGameResult(
      this.state.boardState
    );
    const status = generateGameStatus(gameResult, gameCharacters, this.turn);

    return (
      <div className={styles.game}>
        <LinkButton text="BACK" link="/" theme="backBtn" />
        <Scoreboard gameCharacters={gameCharacters} score={this.state.score} />
        <StatusBoard status={status} />
        <Board
          onClick={(i) => {
            this.handleNextTurn(i);
          }}
          state={this.state}
          winningCellsBacklight={winningCellsBacklight}
        />
        {gameResult !== "Continue" ? (
          <RestartButton onClick={() => this.handleRestart()} />
        ) : (
          <div style={{ height: "50px", marginTop: "30px" }}></div>
        )}
      </div>
    );
  }
}
