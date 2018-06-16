import { combineReducers } from 'redux';
import galleryReducer from './application/features/Gallery/galleryReducer';
import navBarReducer from './application/features/NavBar/navBarReducer';
import filterReducer from './application/features/FilterModal/filterReducer';

const imageGalleryApp = combineReducers({
  gallery: galleryReducer,
  navbar: navBarReducer,
  filter: filterReducer
});

export default imageGalleryApp;
