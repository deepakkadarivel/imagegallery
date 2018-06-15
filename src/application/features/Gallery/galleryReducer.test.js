import seamlessImmutable from 'seamless-immutable';

import galleryReducer from './galleryReducer';
import galleryActionTypes from './galleryActionTypes';
import setPromiseState from '../../shared/utilities/promiseState';

describe('galleryReducer', () => {
  const initialState = seamlessImmutable({
    thumbnails: [],
    promise: {
      getGallery: setPromiseState()
    },
    selectedThumbnail: {},
    selectedThumbnailImage: ''
  });

  it('should return the initial state', () => {
    expect(galleryReducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${galleryActionTypes.GET_GALLERY.pending}`, () => {
    const expectedState = {
      thumbnails: [],
      promise: {
        getGallery: setPromiseState(true, false, false)
      },
      selectedThumbnail: {},
      selectedThumbnailImage: ''
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
      },
      selectedThumbnail: {},
      selectedThumbnailImage: ''
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
      },
      selectedThumbnail: {},
      selectedThumbnailImage: ''
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
      },
      selectedThumbnail: {},
      selectedThumbnailImage: ''
    };

    expect(
      galleryReducer(initialState, {
        type: galleryActionTypes.GET_GALLERY.rejected
      })
    ).toEqual(expectedState);
  });

  it(`should handle ${galleryActionTypes.SET_SELECTED_THUMBNAIL}`, () => {
    const thumbnail = {
      id: 11,
      link: '#',
      description: 'desc'
    };
    const expectedState = {
      thumbnails: [],
      promise: {
        getGallery: setPromiseState()
      },
      selectedThumbnail: thumbnail,
      selectedThumbnailImage: ''
    };

    expect(
      galleryReducer(initialState, {
        type: galleryActionTypes.SET_SELECTED_THUMBNAIL,
        thumbnail
      })
    ).toEqual(expectedState);
  });

  it(`should handle ${galleryActionTypes.SET_SELECTED_THUMBNAIL_IMAGE}`, () => {
    const image = '#';
    const expectedState = {
      thumbnails: [],
      promise: {
        getGallery: setPromiseState()
      },
      selectedThumbnail: {},
      selectedThumbnailImage: image
    };

    expect(
      galleryReducer(initialState, {
        type: galleryActionTypes.SET_SELECTED_THUMBNAIL_IMAGE,
        image
      })
    ).toEqual(expectedState);
  });
});
