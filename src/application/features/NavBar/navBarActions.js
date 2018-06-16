import navBarActionTypes from './navBarActionTypes';

const toggleFilterModalVisibility = () => {
  return {
    type: navBarActionTypes.TOGGLE_FILTER_MODAL
  };
};

export { toggleFilterModalVisibility };
