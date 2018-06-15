import axios from 'axios';
import galleryActionTypes from './galleryActionTypes';
import apiSettings from '../../shared/settings/apiSettings';

const galleryPending = () => {
  return {
    type: galleryActionTypes.GET_GALLERY.pending
  };
};

const galleryFulfilled = () => {
  return {
    type: galleryActionTypes.GET_GALLERY.fulfilled
  };
};

const galleryRejected = () => {
  return {
    type: galleryActionTypes.GET_GALLERY.rejected
  };
};

const setGalleryData = thumbnails => {
  return {
    type: galleryActionTypes.SET_GALLERY,
    thumbnails: thumbnails
  };
};

const getGallery = () => {
  return (dispatch, getState) => {
    const galleryUrl = apiSettings.endpoints.gallery.generateGalleryUrl();
    dispatch(galleryPending());

    return axios
      .get(galleryUrl)
      .then(response => {
        dispatch(galleryFulfilled());
        let thumbnails = response.data ? response.data.data : [];
        dispatch(setGalleryData(thumbnails));
      })
      .catch(() => {
        dispatch(galleryRejected());
      });
  };
};

export { getGallery };