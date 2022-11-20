import { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

export default class LinkButton extends Component {

  render() {
    return (
      <Link to={this.props.link}>
        <button className={styles[this.props.theme]}><b>{this.props.text}</b></button>
      </Link>
    )
  }
}
