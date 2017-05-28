import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

  /*constructor() {
    super();
    this.state = {
      value: null,
    };
  }*/

  render() {
    console.log(this)
    return (
      <button className="square" onClick={() => this.props.onClick({value: 'X'})}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    console.log(squares);
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

var state = false;


class Drawer extends React.Component {

  constructor() {
    super();

    this.height = window.innerHeight;
    this.width = .15 * window.innerWidth;

    this.state = {
      open: false,
    };
  }

  onclick() {
    console.log(this)

    // make a state for this stuff
    if(this.state.open) {
      this.setState({ open: false });
      this.width = .5 * this.width;
    } else {
      this.setState({ open: true });
      this.width = 2 * this.width;
    }
  }

  render() {
    console.log(this)
    return (
      <div id="drawer" className="drawer" style={{ minWidth: '100px', width: this.width, height: this.height, background: '#0072C6'}}>
        <button type="button" onClick={ () => this.onclick() } className="btn btn-secondary btn-lg" aria-label="Justify" style={{ background: 'transparent', width: this.width, height: .5 * this.width }}>
          <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
        </button>
      </div>
    );

  }
}


// ========================================

ReactDOM.render(
  <Drawer />,
  document.getElementById('root')
);
