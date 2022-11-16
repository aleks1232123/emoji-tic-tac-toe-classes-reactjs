import { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './BackButton.module.css'

export default class BackButton extends Component {
  render() {
    return (
      <Link to='/'>
        <button className={styles.backBtn}><b>BACK</b></button>
      </Link>
    )
  }
}
