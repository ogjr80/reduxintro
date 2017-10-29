import React, { Component } from 'react';
import {connect} from 'react-redux';

import {changeValue, makeValue} from './app/actions';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  ChangeText = ()=>{
    this.props.dispatch(changeValue('Make new Text'));
  }
  makeText = () => {
    this.props.dispatch(makeValue('some New Text'));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.props.text} React</h1>
          <button onClick={this.ChangeText}>change Text</button>
          <button onClick={this.makeText}>Make Text</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    text: state.text
  }
}
export default connect(mapStateToProps)(App);
