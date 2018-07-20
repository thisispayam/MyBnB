import React, { Component } from 'react';
import {Header} from './shared/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <h1>MyBnB</h1>
      </div>
    );
  }
}

export default App;
