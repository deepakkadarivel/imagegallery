import navBarActionTypes from './navBarActionTypes';
import navBarReducer from './navBarReducer';
import navBarInitialState from './navBarInitialState';

describe('navBarReducer', () => {
  it('should return the initial state', () => {
    expect(navBarReducer(undefined, {})).toEqual(navBarInitialState);
  });

  it(`should handle ${navBarActionTypes.TOGGLE_FILTER_MODAL}`, () => {
    const expectedState = {
      isFilterModalVisible: true
    };
    const toggleAction = {
      type: navBarActionTypes.TOGGLE_FILTER_MODAL
    };
    const reducerOutput = navBarReducer(navBarInitialState, toggleAction);

    expect(reducerOutput).toEqual(expectedState);
  });
});
