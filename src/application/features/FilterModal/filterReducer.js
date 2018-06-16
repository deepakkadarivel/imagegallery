import filterActionTypes from './filterActionTypes';
import filterInitialState from './filterInitialState';

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case filterActionTypes.SET_SECTION:
      return state.setIn(['sectionFilter'], action.section);

    case filterActionTypes.SET_SORT:
      return state.setIn(['sortFilter'], action.sort);

    case filterActionTypes.SET_WINDOW:
      return state.setIn(['windowFilter'], action.window);

    case filterActionTypes.SET_VIRAL:
      return state.setIn(['viralFilter'], action.viral);

    default:
      return state;
  }
};

export default filterReducer;
