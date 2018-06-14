import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../shared/utilities/promiseState';

const galleryInitialState = seamlessImmutable({
  gallery: [],
  promise: {
    getGallery: setPromiseState()
  }
});

export default galleryInitialState;
