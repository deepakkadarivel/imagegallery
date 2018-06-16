import { connect } from 'react-redux';

import FilterModal from './FilterModal';
import { setSection, setSort, setViral, setWindow } from './filterActions';
import { toggleFilterModalVisibility } from '../NavBar/navBarActions';
import { getGallery } from '../Gallery/galleryActions';

const mapStateToProps = state => {
  return {
    isFilterModalVisible: state.navbar.isFilterModalVisible,
    sectionFilter: state.filter.sectionFilter,
    sortFilter: state.filter.sortFilter,
    windowFilter: state.filter.windowFilter,
    viralFilter: state.filter.viralFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGallery() {
      dispatch(getGallery());
    },

    toggleFilterModal: () => {
      dispatch(toggleFilterModalVisibility());
    },

    setSection: section => {
      dispatch(setSection(section));
    },

    setSort: sort => {
      dispatch(setSort(sort));
    },

    setViral: viral => {
      dispatch(setViral(viral));
    },

    setWindow: window => {
      dispatch(setWindow(window));
    }
  };
};

const FilterModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterModal);

export default FilterModalContainer;
