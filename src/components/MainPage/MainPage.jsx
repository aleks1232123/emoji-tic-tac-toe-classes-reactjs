import { Component } from 'react'
import Banner from '../Banner/Banner'
import StartButton from '../StartButton/StartButton'
import styles from './MainPage.module.css'

export default class MainPage extends Component {
  render() {
    return (
      <div className={styles.mainPage}>
        <Banner />
        <StartButton />
      </div>
    )
  }
}
