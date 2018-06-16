import seamlessImmutable from 'seamless-immutable';

import filterReducer from './filterReducer';
import filterActionTypes from './filterActionTypes';

describe('filterReducer', () => {
  const initialState = seamlessImmutable({
    sectionFilter: 'hot',
    sortFilter: 'viral',
    windowFilter: 'day',
    viralFilter: false
  });

  it('should return the initial state', () => {
    expect(filterReducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${filterActionTypes.SET_SECTION}`, () => {
    const section = 'top';
    const expectedState = {
      sectionFilter: section,
      sortFilter: 'viral',
      windowFilter: 'day',
      viralFilter: false
    };

    expect(
      filterReducer(initialState, {
        type: filterActionTypes.SET_SECTION,
        section
      })
    ).toEqual(expectedState);
  });

  it(`should handle ${filterActionTypes.SET_SORT}`, () => {
    const sort = 'time';
    const expectedState = {
      sectionFilter: 'hot',
      sortFilter: sort,
      windowFilter: 'day',
      viralFilter: false
    };

    expect(
      filterReducer(initialState, {
        type: filterActionTypes.SET_SORT,
        sort
      })
    ).toEqual(expectedState);
  });

  it(`should handle ${filterActionTypes.SET_WINDOW}`, () => {
    const window = 'week';
    const expectedState = {
      sectionFilter: 'hot',
      sortFilter: 'viral',
      windowFilter: window,
      viralFilter: false
    };

    expect(
      filterReducer(initialState, {
        type: filterActionTypes.SET_WINDOW,
        window
      })
    ).toEqual(expectedState);
  });

  it(`should handle ${filterActionTypes.SET_VIRAL}`, () => {
    const viral = true;
    const expectedState = {
      sectionFilter: 'hot',
      sortFilter: 'viral',
      windowFilter: 'day',
      viralFilter: viral
    };

    expect(
      filterReducer(initialState, {
        type: filterActionTypes.SET_VIRAL,
        viral
      })
    ).toEqual(expectedState);
  });
});
