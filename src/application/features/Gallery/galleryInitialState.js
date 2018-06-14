import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../shared/utilities/promiseState';

const galleryInitialState = seamlessImmutable({
  posts: [],
  promise: {
    getGallery: setPromiseState()
  }
});

export default galleryInitialState;
