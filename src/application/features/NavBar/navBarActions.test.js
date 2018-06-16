import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import navBarActionTypes from './navBarActionTypes';
import { toggleFilterModalVisibility } from './navBarActions';

describe('navBarActions', () => {
  const middlewares = [thunk];
  const store = configureStore(middlewares)();

  it(`creates the ${navBarActionTypes.TOGGLE_FILTER_MODAL} action`, () => {
    const expectedActions = [
      {
        type: navBarActionTypes.TOGGLE_FILTER_MODAL
      }
    ];

    store.dispatch(toggleFilterModalVisibility());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
