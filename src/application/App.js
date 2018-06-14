import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import GalleryContainer from './features/Gallery/GalleryContainer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../appStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <GalleryContainer />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
