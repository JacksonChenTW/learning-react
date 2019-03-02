import React from 'react';
import ReactDOM from 'react-dom';

class UserDetail extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.user.name}</h1>
        <img src='{this.props.avator}' alt={this.props.user.name}></img>
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
  render() {
    this.author = {
      name: "Jackson",
      avator: `http://chenguowei.com/img/logo.png`,
    }
    return (
      <Nav user={this.author} />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
