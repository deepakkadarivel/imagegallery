import galleryActionTypes from './galleryActionTypes';
import galleryInitialState from './galleryInitialState';
import setPromiseState from '../../shared/utilities/promiseState';

const galleryReducer = (state = galleryInitialState, action) => {
  switch (action.type) {
    case galleryActionTypes.GET_GALLERY.fulfilled:
      return state.setIn(
        ['promise', 'getGallery'],
        setPromiseState(false, true, false)
      );

    case galleryActionTypes.GET_GALLERY.pending:
      return state.setIn(
        ['promise', 'getGallery'],
        setPromiseState(true, false, false)
      );

    case galleryActionTypes.GET_GALLERY.rejected:
      return state.setIn(
        ['promise', 'getGallery'],
        setPromiseState(false, false, true)
      );

    case galleryActionTypes.SET_GALLERY:
      return state.setIn(['thumbnails'], action.thumbnails);

    case galleryActionTypes.SET_SELECTED_THUMBNAIL:
      return state.setIn(['selectedThumbnail'], action.thumbnail);

    case galleryActionTypes.SET_SELECTED_THUMBNAIL_IMAGE:
      return state.setIn(['selectedThumbnailImage'], action.image);

    default:
      return state;
  }
};

export default galleryReducer;
