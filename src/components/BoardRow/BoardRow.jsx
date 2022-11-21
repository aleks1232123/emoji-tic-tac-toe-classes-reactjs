import { Component } from "react";
import Cell from "../Cell/Cell";
import styles from "./BoardRow.module.css";

export default class BoardRow extends Component {
  render() {
    return (
      <div className={styles.boardRow}>
        {[0, 1, 2].map((num) => (
          <Cell
            onClick={(i) => {
              this.props.onClick(i);
            }}
            value={this.props.value[num]}
            adr={this.props.row + "-" + num}
            key={this.props.row + "-" + num}
            winningCellsBacklight={this.props.winningCellsBacklight[num]}
          />
        ))}
      </div>
    );
  }
}
