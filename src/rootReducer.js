import { combineReducers } from 'redux';
import galleryReducer from './application/features/Gallery/galleryReducer';
import navBarReducer from './application/features/NavBar/navBarReducer';

const imageGalleryApp = combineReducers({
  gallery: galleryReducer,
  navbar: navBarReducer
});

export default imageGalleryApp;
