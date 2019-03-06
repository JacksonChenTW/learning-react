import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(
      state => ({
        isOn: !state.isOn
      })
    );
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e)}>
          {this.state.isOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));