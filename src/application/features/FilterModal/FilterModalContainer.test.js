import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import FilterModal from './FilterModal';
import FilterModalContainer from './FilterModalContainer';
import navBarActionTypes from '../NavBar/navBarActionTypes';
import * as navBarActions from '../NavBar/navBarActions';

jest.mock('./FilterModal');

describe('<FilterModalContainer />', () => {
  const state = {
    navbar: {
      isFilterModalVisible: false
    }
  };
  const store = configureMockStore()(state);

  let container, component, componentProps;

  beforeEach(() => {
    spyOn(store, 'dispatch');
    spyOn(navBarActions, 'toggleFilterModalVisibility').and.returnValue({
      type: navBarActionTypes.TOGGLE_FILTER_MODAL
    });

    FilterModal.mockImplementation(() => {
      return {
        render() {
          return <div />;
        }
      };
    });

    const wrapper = mount(
      <Provider store={store}>
        <FilterModalContainer />
      </Provider>
    );

    container = wrapper.find(FilterModalContainer);
    component = wrapper.find('FilterModal');
    componentProps = component.props();
  });

  it('renders the FilterModalContainer', () => {
    expect(container.length).toBe(1);
    expect(component.length).toBe(1);
  });

  describe('mapStateToProps', () => {
    it('sets the isFilterModalVisible prop', () => {
      expect(componentProps.isFilterModalVisible).toEqual(
        state.navbar.isFilterModalVisible
      );
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls toggleFilterModalVisibility action and toggles isFilterModalVisible', () => {
      componentProps.toggleFilterModal();
      expect(store.dispatch).toHaveBeenCalledWith({
        type: navBarActionTypes.TOGGLE_FILTER_MODAL
      });
    });
  });
});
