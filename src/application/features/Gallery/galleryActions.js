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

const setGalleryData = posts => {
  return {
    type: galleryActionTypes.SET_GALLERY,
    posts
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
        let posts = response.data ? response.data.data : [];
        dispatch(setGalleryData(posts));
      })
      .catch(() => {
        dispatch(galleryRejected());
      });
  };
};

export { getGallery };
