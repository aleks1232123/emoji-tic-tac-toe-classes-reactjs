import { Component } from "react";
import styles from "./Banner.module.css";

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { emoji: 0 };
  }

  charactersList = ["👻", "💀", "😈", "👹", "🤡", "💩", "👽", "👾", "🤖", "🎃"];
  timer;

  changeEmoji = () => {
    this.timer = setInterval(() => {
      let x = this.state.emoji;
      x < 9 ? (x += 1) : (x = 0);
      this.setState({ emoji: x });
    }, 500);
  };

  componentDidMount = () => {
    this.changeEmoji();
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className={styles.bannerText}>
        <span style={{ fontSize: "72px" }}>
          {this.charactersList[this.state.emoji]}
        </span>
        emoji tic-tac-toe
      </div>
    );
  }
}
