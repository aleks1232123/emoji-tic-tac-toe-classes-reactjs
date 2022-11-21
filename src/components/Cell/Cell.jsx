import { Component } from "react";
import styles from "./Cell.module.css";

export default class Cell extends Component {
  render() {
    return (
      <div
        className={styles.cell}
        style={{
          backgroundColor: this.props.winningCellsBacklight === 1 ? "teal" : "",
          color: this.props.winningCellsBacklight === 1 ? "white" : "",
        }}
        value={this.props.value}
        onClick={() => this.props.onClick(this.props.adr)}
      >
        {this.props.value}
      </div>
    );
  }
}
