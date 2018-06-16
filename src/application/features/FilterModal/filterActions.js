import filterActionTypes from './filterActionTypes';

const setSection = section => {
  return {
    type: filterActionTypes.SET_SECTION,
    section
  };
};

const setSort = sort => {
  return {
    type: filterActionTypes.SET_SORT,
    sort
  };
};

const setWindow = window => {
  return {
    type: filterActionTypes.SET_WINDOW,
    window
  };
};

const setViral = viral => {
  return {
    type: filterActionTypes.SET_VIRAL,
    viral
  };
};

export { setSection, setSort, setWindow, setViral };
