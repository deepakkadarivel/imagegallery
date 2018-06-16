import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import filterActionTypes from './filterActionTypes';
import filterInitialState from './filterInitialState';
import { setSection, setSort, setViral, setWindow } from './filterActions';

let state, store;

describe('filterActions', () => {
  const middleWares = [thunk];
  const mockStore = configureMockStore(middleWares);
  beforeEach(() => {
    state = {
      filter: filterInitialState
    };
    store = mockStore(state);
  });

  it('set selected section filter', () => {
    let section = 'hot';
    const expectedActions = [
      {
        type: filterActionTypes.SET_SECTION,
        section
      }
    ];
    store.dispatch(setSection(section));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('set selected sort filter', () => {
    let sort = 'hot';
    const expectedActions = [
      {
        type: filterActionTypes.SET_SORT,
        sort
      }
    ];
    store.dispatch(setSort(sort));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('set selected window filter', () => {
    let window = 'top';
    const expectedActions = [
      {
        type: filterActionTypes.SET_WINDOW,
        window
      }
    ];
    store.dispatch(setWindow(window));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('set selected viral filter', () => {
    let viral = true;
    const expectedActions = [
      {
        type: filterActionTypes.SET_VIRAL,
        viral
      }
    ];
    store.dispatch(setViral(viral));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
