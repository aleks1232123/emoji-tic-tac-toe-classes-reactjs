import { Component } from "react";
import styles from "./ScoreBoard.module.css";

export default class ScoreBoard extends Component {
  render() {
    return (
      <div className={styles.scoreBoard}>
        <div>
          {this.props.gameCharacters[0]} <b>{this.props.score[0]}</b>
        </div>
        <div>
          {this.props.gameCharacters[1]} <b>{this.props.score[1]}</b>
        </div>
      </div>
    );
  }
}
