import seamlessImmutable from 'seamless-immutable';

import galleryReducer from './galleryReducer';
import galleryActionTypes from './galleryActionTypes';
import setPromiseState from '../../shared/utilities/promiseState';

describe('galleryReducer', () => {
  const initialState = seamlessImmutable({
    thumbnails: [],
    promise: {
      getGallery: setPromiseState()
    }
  });

  it('should return the initial state', () => {
    expect(galleryReducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${galleryActionTypes.GET_GALLERY.pending}`, () => {
    const expectedState = {
      thumbnails: [],
      promise: {
        getGallery: setPromiseState(true, false, false)
      }
    };

    expect(
      galleryReducer(initialState, {
        type: galleryActionTypes.GET_GALLERY.pending
      })
    ).toEqual(expectedState);
  });

  it(`should handle ${galleryActionTypes.GET_GALLERY.fulfilled}`, () => {
    const expectedState = {
      thumbnails: [],
      promise: {
        getGallery: setPromiseState(false, true, false)
      }
    };

    expect(
      galleryReducer(initialState, {
        type: galleryActionTypes.GET_GALLERY.fulfilled
      })
    ).toEqual(expectedState);
  });

  it(`should handle ${galleryActionTypes.SET_GALLERY}`, () => {
    const thumbnails = [
      {
        id: 11,
        imageUri: '#',
        description: 'desc'
      }
    ];
    const expectedState = {
      thumbnails,
      promise: {
        getGallery: setPromiseState()
      }
    };

    expect(
      galleryReducer(initialState, {
        type: galleryActionTypes.SET_GALLERY,
        thumbnails: thumbnails
      })
    ).toEqual(expectedState);
  });

  it(`should handle ${galleryActionTypes.GET_GALLERY.rejected}`, () => {
    const expectedState = {
      thumbnails: [],
      promise: {
        getGallery: setPromiseState(false, false, true)
      }
    };

    expect(
      galleryReducer(initialState, {
        type: galleryActionTypes.GET_GALLERY.rejected
      })
    ).toEqual(expectedState);
  });
});
