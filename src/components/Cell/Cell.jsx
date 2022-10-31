import { Component } from 'react'

export default class Cell extends Component {

  componentDidMount() {
    console.log(this);
  }

  render() {
    return (
      <button 
        value={this.props.value}
        onClick={() => this.props.onClick(this.props.adr)}
        style={{fontSize: '36px', width: '100px', height: '100px'}}>
          {this.props.value}              
      </button>
    )
  }
}
