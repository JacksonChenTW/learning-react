import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form_value: {
        name: 'sdfasdf',
        description: 'asdf',
      }
    };
  }

  handleChange(event) {
    const name = event.target.name
    this.setState({ form_value: { [name]: event.target.value } });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.form_value.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          Name:<input type="text" name="name" value={this.state.form_value.name} onChange={(e) => this.handleChange(e)}></input>
        </div>
        <div>
          <textarea name="description" value={this.state.form_value.description || ''} onChange={(e) => this.handleChange(e)}></textarea>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));