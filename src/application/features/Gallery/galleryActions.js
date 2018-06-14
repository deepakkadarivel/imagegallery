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

const setGalleryData = gallery => {
  return {
    type: galleryActionTypes.SET_GALLERY,
    gallery
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
        let gallery = response.data ? response.data : [];
        dispatch(setGalleryData(gallery));
      })
      .catch(() => {
        dispatch(galleryRejected());
      });
  };
};

export default getGallery;
