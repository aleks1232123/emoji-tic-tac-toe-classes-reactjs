import { Component } from 'react'

export default class Cell extends Component {
  //допилить стилизацию

  componentDidMount() {
    console.log(this);
  }

  render() {

    const mystyle = {
      fontSize: '50px',
      width: '120px',
      height: '120px',
      backgroundColor: this.props.gameColorScheme === 1 ? 'teal' : '',
      color: this.props.gameColorScheme === 1 ? 'white' : '',
      border: '2px solid black', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    return (
      <div
        value={this.props.value}
        onClick={() => this.props.onClick(this.props.adr)}
        style={mystyle}>
          {this.props.value}              
      </div>
    )
  }
}
