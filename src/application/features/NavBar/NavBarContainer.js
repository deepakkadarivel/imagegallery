import { connect } from 'react-redux';

import { toggleFilterModalVisibility } from './navBarActions';
import NavBar from './NavBar';

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

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

export default NavBarContainer;
