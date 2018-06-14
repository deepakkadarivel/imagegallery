import React from 'react';
import { shallow } from 'enzyme';

import GalleryComponent from './GalleryComponent';
import setPromiseState from '../../shared/utilities/promiseState';
import LoaderComponent from '../Loader/Loader';

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

  describe('#loader', () => {
    it('shows loader based on isPending prop', () => {
      const component = shallow(<GalleryComponent {...props} />);
      let loaderComponent = component.find(LoaderComponent);
      expect(loaderComponent.length).toBe(0);
      component.setProps({
        gallery: {
          posts: [],
          promise: {
            getGallery: setPromiseState(true, false, false)
          }
        }
      });
      loaderComponent = component.find(LoaderComponent);
      expect(loaderComponent.length).toBe(1);
    });
  });
});
