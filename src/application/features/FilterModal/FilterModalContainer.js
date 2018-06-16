import { connect } from 'react-redux';

import FilterModal from './FilterModal';
import { toggleFilterModalVisibility } from '../NavBar/navBarActions';

const mapStateToProps = state => {
  return {
    isFilterModalVisible: state.navbar.isFilterModalVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFilterModal: () => {
      dispatch(toggleFilterModalVisibility());
    }
  };
};

const FilterModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterModal);

export default FilterModalContainer;
