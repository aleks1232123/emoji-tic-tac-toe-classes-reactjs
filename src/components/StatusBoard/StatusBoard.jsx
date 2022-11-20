import { Component } from "react";
import styles from "./StatusBoard.module.css";

export default class StatusBoard extends Component {
  render() {
    return (
      <div className={styles.statusBoard}>
        <b>{this.props.status}</b>
      </div>
    );
  }
}
