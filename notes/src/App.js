import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
    }
  }

  componentDidMount() {
    console.log('test');
    this.getNotes();
  }

  getNotes = () => {
    const username = 'justinborek';
    const password = 'Gravity28!'
    const user = { username, password };
    axios
      .get('http://127.0.0.1:8000/api/notes/', {
        headers: { Authorization: `username: ${username} password: ${password}` }
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          notes: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
