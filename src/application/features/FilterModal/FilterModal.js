import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './filterModal.css';
import RadioInput from '../RadioInput/RadioInput';
import filterModel from './filterDataModel';

class FilterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionFilter: 'hot',
      sortFilter: 'viral',
      windowFilter: 'day'
    };
  }

  applyFiler() {
    this.props.toggleFilterModal();
  }

  onSectionChanged(e) {
    this.setState({
      section: e.currentTarget.value
    });
  }

  setSelectedRadioValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  renderRadioInputs(model) {
    return model.map(item => {
      return (
        <RadioInput
          key={item.value}
          name={item.group}
          value={item.value}
          label={item.label}
          checkedValue={this.state[item.group]}
          onChange={e => this.setSelectedRadioValue(e)}
        />
      );
    });
  }

  render() {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Filter Gallery</h4>
            <span
              className="close"
              onClick={() => this.props.toggleFilterModal()}
            >
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
                  <td>{this.renderRadioInputs(filterModel.sectionFilter)}</td>
                </tr>
                <tr>
                  <th>Sort</th>
                  <td>{this.renderRadioInputs(filterModel.sortFilter)}</td>
                </tr>
                <tr>
                  <th>Window</th>
                  <td>{this.renderRadioInputs(filterModel.windowFilter)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer" onClick={() => this.applyFiler()}>
            <h4>Apply</h4>
          </div>
        </div>
      </div>
    );
  }
}

FilterModal.propTypes = {
  isFilterModalVisible: PropTypes.bool,
  toggleFilterModal: PropTypes.func
};

export default FilterModal;
