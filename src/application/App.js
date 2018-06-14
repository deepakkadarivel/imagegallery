import React, { Component } from 'react';
import './App.css';
import GalleryContainer from './features/Gallery/GalleryContainer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../appStore';
import NavBarComponent from './features/NavBar/NavBarComponent';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <NavBarComponent />
            <GalleryContainer />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
