import React, { Component } from 'react'

export default class Scoreboard extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', margin: '80px', position: 'absolute'}}>
        <div>1</div>
        <div>2</div>
      </div>
    )
  }
}

