import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../shared/utilities/promiseState';

const galleryInitialState = seamlessImmutable({
  thumbnails: [],
  selectedThumbnail: {},
  selectedThumbnailImage: '',
  promise: {
    getGallery: setPromiseState()
  }
});

export default galleryInitialState;
