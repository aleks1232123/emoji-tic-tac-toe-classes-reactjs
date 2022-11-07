import { Component } from 'react'

export default class Cell extends Component {

  gameColorScheme = this.props.gameColorScheme === 1 ? 'blue' : ''; //допилить стилизацию

  componentDidMount() {
    console.log(this);
  }

  render() {

    const mystyle = {
      fontSize: '36px',
      width: '100px',
      height: '100px',
    };

    return (
      <button 
        value={this.props.value}
        onClick={() => this.props.onClick(this.props.adr)}
        style={mystyle}>
          {this.props.value}              
      </button>
    )
  }
}
