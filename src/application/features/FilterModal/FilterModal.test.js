import React from 'react';
import { shallow } from 'enzyme';

import FilterModal from './FilterModal';
import filterInitialState from './filterInitialState';
import filterModal from './filterDataModel';

describe('<FilterModal/>', () => {
  const getGalleryMock = jest.fn();
  const toggleFilterModalMock = jest.fn();
  const setSectionMock = jest.fn();
  const setSortMock = jest.fn();
  const setViralMock = jest.fn();
  const setWindowMock = jest.fn();

  const props = {
    isFilterModalVisible: true,
    getGallery: getGalleryMock,
    toggleFilterModal: toggleFilterModalMock,
    setSection: setSectionMock,
    setSort: setSortMock,
    setViral: setViralMock,
    setWindow: setWindowMock,
    sectionFilter: 'hot',
    sortFilter: 'viral',
    windowFilter: 'day',
    viralFilter: false
  };

  const component = shallow(<FilterModal {...props} />);

  it('renders the FilterModal Component', () => {
    expect(component.hasClass('FilterModal')).toBeTruthy();
    const modalContent = component.find('.modal-content');
    expect(modalContent.hasClass('modal-content')).toBeTruthy();
    expect(modalContent.find('hr').length).toBe(1);
  });

  it('renders the filter modal header', () => {
    const modalHeader = component.find('.modal-header');
    expect(modalHeader.find('h4').props().children).toBe('Filter Gallery');
    const close = modalHeader.find('span');
    expect(close.hasClass('close')).toBeTruthy();
    close.props().onClick();
    expect(toggleFilterModalMock).toHaveBeenCalled();
  });

  describe('renders the filter modal body', () => {
    const modalBody = component.find('.modal-body');
    const th = modalBody.find('th');
    const td = modalBody.find('td');

    it('renders the filter modal table', () => {
      expect(modalBody.find('table').length).toBe(1);
      expect(modalBody.find('tbody').length).toBe(1);
      expect(modalBody.find('tr').length).toBe(4);

      expect(th.length).toBe(4);
      expect(th.at(0).props().children).toBe('Include Viral');
      expect(th.at(1).props().children).toBe('Section');
      expect(th.at(2).props().children).toBe('Sort');
      expect(th.at(3).props().children).toBe('Window');
      expect(td.length).toBe(4);
    });

    it('renders the filter modal checkbox input', () => {
      const event = {
        target: {
          value: ''
        }
      };

      const checkboxInput = td.at(0).find('input');
      expect(checkboxInput.length).toBe(1);
      expect(checkboxInput.props().type).toBe('checkbox');
      expect(checkboxInput.props().checked).toBe(props.viralFilter);
      checkboxInput.props().onChange(event);
      expect(setViralMock).toHaveBeenCalled();
    });

    it('renders the filter modal section radio inputs', () => {
      const event = {
        target: {
          name: 'sectionFilter',
          value: 'hot'
        }
      };

      const sectionRadioInputs = td.at(1).find('RadioInput');
      expect(sectionRadioInputs.length).toBe(3);
      const radioInput = sectionRadioInputs.at(0);
      expect(radioInput.props().name).toBe(filterModal.sectionFilter[0].group);
      expect(radioInput.props().value).toBe(filterModal.sectionFilter[0].value);
      expect(radioInput.props().label).toBe(filterModal.sectionFilter[0].label);
      expect(radioInput.props().checkedValue).toBe(
        filterInitialState.sectionFilter
      );
      radioInput.props().onChange(event);
      expect(setSectionMock).toHaveBeenCalled();
    });

    it('renders the filter modal sort radio inputs', () => {
      const event = {
        target: {
          name: 'sortFilter',
          value: 'viral'
        }
      };

      const sortRadioInputs = td.at(2).find('RadioInput');
      expect(sortRadioInputs.length).toBe(3);
      const radioInput = sortRadioInputs.at(0);
      expect(radioInput.props().name).toBe(filterModal.sortFilter[0].group);
      expect(radioInput.props().value).toBe(filterModal.sortFilter[0].value);
      expect(radioInput.props().label).toBe(filterModal.sortFilter[0].label);
      expect(radioInput.props().checkedValue).toBe(
        filterInitialState.sortFilter
      );
      radioInput.props().onChange(event);
      expect(setSortMock).toHaveBeenCalled();
    });

    it('renders the filter modal window radio inputs', () => {
      const event = {
        target: {
          name: 'windowFilter',
          value: 'day'
        }
      };

      const windowRadioInputs = td.at(3).find('RadioInput');
      expect(windowRadioInputs.length).toBe(4);
      const radioInput = windowRadioInputs.at(0);
      expect(radioInput.props().name).toBe(filterModal.windowFilter[0].group);
      expect(radioInput.props().value).toBe(filterModal.windowFilter[0].value);
      expect(radioInput.props().label).toBe(filterModal.windowFilter[0].label);
      expect(radioInput.props().checkedValue).toBe(
        filterInitialState.windowFilter
      );
      radioInput.props().onChange(event);
      expect(setWindowMock).toHaveBeenCalled();
    });
  });

  it('renders the filter modal footer', () => {
    const modalFooter = component.find('.modal-footer');
    expect(modalFooter.find('h4').props().children).toBe('Apply');
    modalFooter.props().onClick();
    expect(toggleFilterModalMock).toHaveBeenCalled();
    expect(getGalleryMock).toHaveBeenCalled();
  });
});
