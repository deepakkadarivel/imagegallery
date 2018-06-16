import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import NavBar from './NavBar';
import NavBarContainer from './NavBarContainer';
import navBarActionTypes from './navBarActionTypes';
import * as navBarActions from './navBarActions';

jest.mock('./NavBar');

describe('<NavBarContainer />', () => {
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

    NavBar.mockImplementation(() => {
      return {
        render() {
          return <div />;
        }
      };
    });

    const wrapper = mount(
      <Provider store={store}>
        <NavBarContainer />
      </Provider>
    );

    container = wrapper.find(NavBarContainer);
    component = wrapper.find('NavBar');
    componentProps = component.props();
  });

  it('renders the NavBarContainer', () => {
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
