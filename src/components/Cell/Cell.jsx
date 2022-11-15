import { Component } from 'react'
import styles from './Cell.module.css'

export default class Cell extends Component {

  render() {
    return (
      <div
        className={styles.cell}
        value={this.props.value}
        onClick={() => this.props.onClick(this.props.adr)}>
          {this.props.value}              
      </div>
    )
  }
}
