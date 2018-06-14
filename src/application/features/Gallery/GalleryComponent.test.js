import React from 'react';
import { shallow } from 'enzyme';

import GalleryComponent from './GalleryComponent';
import setPromiseState from '../../shared/utilities/promiseState';

describe('<GalleryComponent />', () => {
  const getGalleryMock = jest.fn();

  const props = {
    gallery: {
      posts: [],
      promise: {
        getGallery: setPromiseState()
      }
    },
    getGallery: getGalleryMock
  };

  it('renders the Gallery Component', () => {
    const component = shallow(<GalleryComponent {...props} />);
    expect(component.hasClass('GalleryComponent')).toBeTruthy();
  });
});
