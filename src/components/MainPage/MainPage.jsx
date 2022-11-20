import { Component } from 'react'
import Banner from '../Banner/Banner'
import Contacts from '../Contacts/Contacts'
import LinkButton from '../LinkButton/LinkButton'
import styles from './MainPage.module.css'

export default class MainPage extends Component {
  render() {
    return (
      <div className={styles.mainPage}>
        <Banner />
        <LinkButton text="START" link="/game" theme="startBtn"/>
        <Contacts />
      </div>
    )
  }
}
