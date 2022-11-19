import { Component } from 'react'
import Banner from '../Banner/Banner'
import Contacts from '../Contacts/Contacts'
import StartButton from '../StartButton/StartButton'
import styles from './MainPage.module.css'

export default class MainPage extends Component {
  render() {
    return (
      <div className={styles.mainPage}>
        <Banner />
        <StartButton />
        <Contacts />
      </div>
    )
  }
}
