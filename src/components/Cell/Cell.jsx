import { Component } from 'react'

export default class Cell extends Component {

  constructor(props) {
    super(props);
    this.state = {cellState: 'O'};
  }

  componentDidMount() {
    console.log(this);
  }

  cellClickHandler = () => this.state.cellState === 'O' ? this.setState({cellState: 'X'}) : this.setState({cellState: 'O'})

  render() {
    return (
      <button value={this.props.value} onClick={this.cellClickHandler} style={{fontSize: '36px', width: '100px', height: '100px'}}>
        {this.state.cellState}
      </button>
    )
  }
}

