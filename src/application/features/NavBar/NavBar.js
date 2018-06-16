import React from 'react';
import './navBar.css';
import PropTypes from 'prop-types';

const NavBar = props => {
  return (
    <div className="NavBar">
      <header className="App-header">
        <h4>Image Gallery</h4>
        <span id="filter" onClick={() => props.toggleFilterModal()} />
      </header>
    </div>
  );
};

NavBar.propTypes = {
  isFilterModalVisible: PropTypes.bool,
  toggleFilterModal: PropTypes.func
};

export default NavBar;
