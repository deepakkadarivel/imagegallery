import { combineReducers } from 'redux';
import galleryReducer from './application/features/Gallery/galleryReducer';

const imageGalleryApp = combineReducers({
  gallery: galleryReducer
});

export default imageGalleryApp;
