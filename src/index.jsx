import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'sdfasdf',
      description: 'asdf',
    };
  }

  handleChange(event) {
    const name = event.target.name;
    console.log(name, event.target.value);
    this.setState({ [name]: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          Name:<input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}></input>
        </div>
        <div>
          <textarea name="description" value={this.state.description || ''} onChange={(e) => this.handleChange(e)}></textarea>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));