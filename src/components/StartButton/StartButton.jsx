import { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './StartButton.module.css'

export default class StartButton extends Component {
  render() {
    return (
      <Link to='/game'>
        <button className={styles.startBtn}><b>START</b></button>
      </Link>
    )
  }
}
