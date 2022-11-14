import React, { Component } from 'react'

export default class StatusBoard extends Component {
  render() {

    return (
      <div style={{fontSize: '24px', marginLeft: '100px'}}>
            <b>{this.props.status}</b>
      </div>
    )
  }
}

