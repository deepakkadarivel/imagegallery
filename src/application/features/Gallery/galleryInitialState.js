import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../shared/utilities/promiseState';

const galleryInitialState = seamlessImmutable({
  thumbnails: [],
  promise: {
    getGallery: setPromiseState()
  }
});

export default galleryInitialState;
