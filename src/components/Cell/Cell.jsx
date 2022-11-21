import { Component } from "react";
import styles from "./Cell.module.css";

export default class Cell extends Component {
  render() {
    let theme = this.props.cellBacklight ? "winningCell" : "cell";

    return (
      <div
        className={styles[theme]}
        value={this.props.value}
        onClick={() => this.props.onClick(this.props.adr)}
      >
        {this.props.value}
      </div>
    );
  }
}
