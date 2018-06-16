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

const setSelectedThumbnail = thumbnail => {
  return {
    type: galleryActionTypes.SET_SELECTED_THUMBNAIL,
    thumbnail
  };
};

const setSelectedThumbnailImage = image => {
  return {
    type: galleryActionTypes.SET_SELECTED_THUMBNAIL_IMAGE,
    image
  };
};

const getGallery = () => {
  return (dispatch, getState) => {
    const galleryUrl = apiSettings.endpoints.gallery.generateGalleryUrl();
    dispatch(galleryPending());

    let payload = {
      sectionFilter: getState().filter.sectionFilter,
      sortFilter: getState().filter.sortFilter,
      windowFilter: getState().filter.windowFilter,
      viralFilter: getState().filter.viralFilter
    };

    return axios
      .post(galleryUrl, payload)
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

export { getGallery, setSelectedThumbnail, setSelectedThumbnailImage };
