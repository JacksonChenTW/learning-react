import React from 'react';
import ReactDOM from 'react-dom';


class UserDetail extends React.Component {
  render() {
    const img_avast = <img src='{this.props.avator}' alt={this.props.user.name}></img>;
    return (
      <React.Fragment>
        <h1>{this.props.user.name}</h1>

      </React.Fragment>
    );
  }
}

function Nav(props) {
  return (
    <React.Fragment>
      <h1>Nav</h1>
      <UserDetail user={props.user} />
    </React.Fragment>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    this.author = {
      name: "Jackson",
      avator: `http://chenguowei.com/img/logo.png`,
    }
    return (
      <div>
        <Nav user={this.author} />
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));