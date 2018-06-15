import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import galleryActionTypes from './galleryActionTypes';
import galleryInitialState from './galleryInitialState';
import { getGallery } from './galleryActions';
import axios from 'axios';
import apiSettings from '../../shared/settings/apiSettings';

let state, store;

describe('getGallery', () => {
  const middleWares = [thunk];
  const mockStore = configureMockStore(middleWares);
  beforeEach(() => {
    state = {
      gallery: galleryInitialState
    };
    store = mockStore(state);
  });

  it('make getGallery api call', () => {
    spyOn(axios, 'get').and.returnValue(Promise.resolve({ data: [] }));
    const galleryUrl = apiSettings.endpoints.gallery.generateGalleryUrl();
    store.dispatch(getGallery());
    expect(axios.get).toHaveBeenCalledWith(galleryUrl);
    expect(galleryUrl.endsWith('gallery')).toEqual(true);
  });

  it(`dispatches ${
    galleryActionTypes.SET_GALLERY
  } action with data on successful response`, done => {
    const mockGalleryData = {
      data: [
        {
          id: 11,
          imageUri: '#',
          description: 'desc'
        }
      ]
    };
    const expectedActions = [
      {
        type: galleryActionTypes.GET_GALLERY.pending
      },
      {
        type: galleryActionTypes.GET_GALLERY.fulfilled
      },
      {
        type: galleryActionTypes.SET_GALLERY,
        thumbnails: mockGalleryData.data
      }
    ];
    spyOn(axios, 'get').and.returnValue(
      Promise.resolve({ data: mockGalleryData })
    );
    store.dispatch(getGallery()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it(`dispatches ${
    galleryActionTypes.GET_GALLERY.rejected
  } action if the response is failed`, done => {
    spyOn(axios, 'get').and.returnValue(Promise.reject());
    const expectedActions = [
      {
        type: galleryActionTypes.GET_GALLERY.pending
      },
      {
        type: galleryActionTypes.GET_GALLERY.rejected
      }
    ];
    store.dispatch(getGallery()).then(() => {
      expect(axios.get).toHaveBeenCalled();
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
