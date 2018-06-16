import navBarActionTypes from './navBarActionTypes';
import navBarInitialState from './navBarInitialState';

const navBarReducer = (state = navBarInitialState, action) => {
  switch (action.type) {
    case navBarActionTypes.TOGGLE_FILTER_MODAL:
      return state.set('isFilterModalVisible', !state.isFilterModalVisible);

    default:
      return state;
  }
};

export default navBarReducer;
