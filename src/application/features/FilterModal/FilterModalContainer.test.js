import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import FilterModal from './FilterModal';
import FilterModalContainer from './FilterModalContainer';
import navBarActionTypes from '../NavBar/navBarActionTypes';
import * as navBarActions from '../NavBar/navBarActions';
import * as filterActions from './filterActions';
import filterActionTypes from './filterActionTypes';
import * as galleryActions from '../Gallery/galleryActions';
import galleryActionTypes from '../Gallery/galleryActionTypes';
import setPromiseState from '../../shared/utilities/promiseState';

jest.mock('./FilterModal');

describe('<FilterModalContainer />', () => {
  const state = {
    gallery: {
      thumbnails: [],
      promise: {
        getGallery: setPromiseState()
      }
    },
    navbar: {
      isFilterModalVisible: false
    },
    filter: {
      sectionFilter: 'hot',
      sortFilter: 'viral',
      windowFilter: 'day',
      viralFilter: false
    }
  };
  const store = configureMockStore()(state);

  let container, component, componentProps;

  beforeEach(() => {
    spyOn(store, 'dispatch');
    spyOn(galleryActions, 'getGallery').and.returnValue({
      type: galleryActionTypes.SET_GALLERY,
      thumbnails: [{ id: 'post1' }, { id: 'post2' }]
    });
    spyOn(navBarActions, 'toggleFilterModalVisibility').and.returnValue({
      type: navBarActionTypes.TOGGLE_FILTER_MODAL
    });
    spyOn(filterActions, 'setSection').and.returnValue({
      type: filterActionTypes.SET_SECTION,
      section: 'hot'
    });
    spyOn(filterActions, 'setSort').and.returnValue({
      type: filterActionTypes.SET_SORT,
      sort: 'viral'
    });
    spyOn(filterActions, 'setViral').and.returnValue({
      type: filterActionTypes.SET_VIRAL,
      viral: false
    });
    spyOn(filterActions, 'setWindow').and.returnValue({
      type: filterActionTypes.SET_WINDOW,
      window: 'day'
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
    it('sets the filter props', () => {
      expect(componentProps.sortFilter).toEqual(state.filter.sortFilter);
      expect(componentProps.sectionFilter).toEqual(state.filter.sectionFilter);
      expect(componentProps.windowFilter).toEqual(state.filter.windowFilter);
      expect(componentProps.viralFilter).toEqual(state.filter.viralFilter);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls getGallery action', () => {
      componentProps.getGallery();
      expect(store.dispatch).toHaveBeenCalledWith({
        type: galleryActionTypes.SET_GALLERY,
        thumbnails: [{ id: 'post1' }, { id: 'post2' }]
      });
    });

    it('calls toggleFilterModalVisibility action and toggles isFilterModalVisible', () => {
      componentProps.toggleFilterModal();
      expect(store.dispatch).toHaveBeenCalledWith({
        type: navBarActionTypes.TOGGLE_FILTER_MODAL
      });
    });

    it('calls setSection action', () => {
      let section = 'hot';
      componentProps.setSection(section);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: filterActionTypes.SET_SECTION,
        section
      });
    });

    it('calls setSort action', () => {
      let sort = 'viral';
      componentProps.setSort(sort);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: filterActionTypes.SET_SORT,
        sort
      });
    });

    it('calls setViral action', () => {
      let viral = false;
      componentProps.setViral(viral);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: filterActionTypes.SET_VIRAL,
        viral
      });
    });

    it('calls setWindow action', () => {
      let window = 'day';
      componentProps.setWindow(window);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: filterActionTypes.SET_WINDOW,
        window
      });
    });
  });
});
