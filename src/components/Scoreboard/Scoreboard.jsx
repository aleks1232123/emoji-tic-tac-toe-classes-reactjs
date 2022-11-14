import React, { Component } from 'react'

export default class Scoreboard extends Component {
  render() {
    return (
      <div style={{fontSize: '24px', position: 'absolute'}}>
        <div>1: {this.props.score[0]}</div>
        <div>2: {this.props.score[1]}</div>
      </div>
    )
  }
}

