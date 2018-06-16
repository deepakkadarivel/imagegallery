import React from 'react';
import './filterModal.css';
import PropTypes from 'prop-types';

const FilterModal = props => {
  const applyFiler = () => {
    props.toggleFilterModal();
  };
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Filter Gallery</h4>
          <span className="close" onClick={() => props.toggleFilterModal()}>
            &times;
          </span>
        </div>
        <hr />
        <div className="modal-body">
          <table>
            <tbody>
              <tr>
                <th>Include Viral</th>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <th>Section</th>
                <td>
                  <input type="radio" name="group1" />
                  <label>Hot</label>
                  <input type="radio" name="group1" />
                  <label>Top</label>
                  <input type="radio" name="group1" />
                  <label>User</label>
                </td>
              </tr>
              <tr>
                <th>Sort</th>
                <td>
                  <input type="radio" name="group2" />
                  <label>Viral</label>
                  <input type="radio" name="group2" />
                  <label>Top</label>
                  <input type="radio" name="group2" />
                  <label>Time</label>
                </td>
              </tr>
              <tr>
                <th>Window</th>
                <td>
                  <input type="radio" name="group3" />
                  <label>Day</label>
                  <input type="radio" name="group3" />
                  <label>Week</label>
                  <input type="radio" name="group3" />
                  <label>Month</label>
                  <input type="radio" name="group3" />
                  <label>Year</label>
                  <input type="radio" name="group3" />
                  <label>All</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="modal-footer" onClick={() => applyFiler()}>
          <h4>Apply</h4>
        </div>
      </div>
    </div>
  );
};

FilterModal.propTypes = {
  isFilterModalVisible: PropTypes.bool,
  toggleFilterModal: PropTypes.func
};

export default FilterModal;
