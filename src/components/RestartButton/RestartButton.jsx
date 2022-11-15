import { Component } from 'react'
import styles from './RestartButton.module.css'

export default class RestartButton extends Component {
  render() {
    return (
      <div className={styles.buttonContainer}>
        <button
          className={styles.restartBtn}
          onClick={() => this.props.onClick()}>
            <b>RESTART</b>
        </button>
      </div>
    )
  }
}
