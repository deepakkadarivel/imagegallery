import React, { Component } from 'react';
import './App.css';
import GalleryContainer from './features/Gallery/GalleryContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../appStore';
import NavBarComponent from './features/NavBar/NavBarComponent';
import ThumbnailDetailContainer from './features/ThumbnailDetail/ThumbnailDetailContainer';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <NavBarComponent />
            <Switch>
              <Route exact path="/" component={GalleryContainer} />
              <Route
                exact
                path="/detail"
                component={ThumbnailDetailContainer}
              />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
