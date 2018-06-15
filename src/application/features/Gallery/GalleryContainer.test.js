import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

jest.mock('./GalleryComponent');

import GalleryComponent from './GalleryComponent';
import GalleryContainer from './GalleryContainer';
import galleryActionTypes from './galleryActionTypes';
import * as galleryActions from './galleryActions';
import setPromiseState from '../../shared/utilities/promiseState';

describe('<GalleryContainer />', () => {
  const state = {
    gallery: {
      thumbnails: [],
      promise: {
        getGallery: setPromiseState()
      }
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
    spyOn(galleryActions, 'setSelectedThumbnail').and.returnValue({
      type: galleryActionTypes.SET_SELECTED_THUMBNAIL,
      thumbnail: { id: 'post1' }
    });

    GalleryComponent.mockImplementation(() => {
      return {
        render() {
          return <div />;
        }
      };
    });

    const wrapper = mount(
      <Provider store={store}>
        <GalleryContainer />
      </Provider>
    );

    container = wrapper.find(GalleryContainer);
    component = wrapper.find('GalleryComponent');
    componentProps = component.props();
  });

  it('renders the GalleryContainer', () => {
    expect(container.length).toBe(1);
    expect(component.length).toBe(1);
  });

  describe('mapStateToProps', () => {
    it('sets the thumbnails prop', () => {
      expect(componentProps.gallery).toEqual(state.gallery);
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

    it('calls setSelectedThumbnail action', () => {
      let thumbnail = { id: 'post1' };
      componentProps.setSelectedThumbnail(thumbnail);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: galleryActionTypes.SET_SELECTED_THUMBNAIL,
        thumbnail
      });
    });
  });
});
