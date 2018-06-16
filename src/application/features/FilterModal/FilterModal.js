import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './filterModal.css';
import RadioInput from '../RadioInput/RadioInput';
import filterModel from './filterDataModel';

class FilterModal extends Component {
  applyFiler() {
    this.props.toggleFilterModal();
    this.props.getGallery();
  }

  setSelectedRadioValue(e) {
    switch (e.target.name) {
      case 'sectionFilter':
        this.props.setSection(e.target.value);
        break;
      case 'sortFilter':
        this.props.setSort(e.target.value);
        break;
      case 'windowFilter':
        this.props.setWindow(e.target.value);
        break;
      default:
        break;
    }
  }

  setSelectedCheckboxValue(e) {
    this.props.setViral(e.target.checked);
  }

  renderRadioInputs(model) {
    return model.map(item => {
      return (
        <RadioInput
          key={item.value}
          name={item.group}
          value={item.value}
          label={item.label}
          checkedValue={this.props[item.group]}
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
                    <input
                      type="checkbox"
                      checked={this.props.viralFilter}
                      onChange={e => this.setSelectedCheckboxValue(e)}
                    />
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
  getGallery: PropTypes.func,
  toggleFilterModal: PropTypes.func,
  setSection: PropTypes.func,
  setSort: PropTypes.func,
  setViral: PropTypes.func,
  setWindow: PropTypes.func,
  sectionFilter: PropTypes.string,
  sortFilter: PropTypes.string,
  windowFilter: PropTypes.string,
  viralFilter: PropTypes.bool
};

export default FilterModal;
