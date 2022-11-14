import React, { Component } from 'react'

export default class RestartButton extends Component {
  render() {
    return (
      <div style={{position: 'absolute', bottom: '170px'}}>
        {this.props.winner !== 1 ? (<button onClick={() => this.props.onClick()} style={{backgroundColor: 'teal', fontSize: '18px', border: 'none', borderRadius: '3px', cursor: 'pointer', width: '150px', height: '50px', color: 'white'}}><b>RESTART</b></button>) : null}
      </div>
    )
  }
}
