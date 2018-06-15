import React from 'react';
import { shallow } from 'enzyme';

import GalleryComponent from './GalleryComponent';
import setPromiseState from '../../shared/utilities/promiseState';
import LoaderComponent from '../Loader/Loader';

describe('<GalleryComponent />', () => {
  const getGalleryMock = jest.fn();

  const props = {
    gallery: {
      thumbnails: [],
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
          thumbnails: [],
          promise: {
            getGallery: setPromiseState(true, false, false)
          }
        }
      });
      loaderComponent = component.find(LoaderComponent);
      expect(loaderComponent.length).toBe(1);
    });
  });

  describe('<Masonry>', () => {
    it('renders the Masonry component', () => {
      const component = shallow(<GalleryComponent {...props} />);
      component.setProps({
        gallery: {
          thumbnails: [
            {
              id: '1',
              type: 'image/png',
              link: 'sample link',
              title: 'image one'
            },
            {
              id: '2',
              type: 'image/gif',
              link: 'sample link',
              title: 'image two'
            },
            {
              id: '3',
              type: 'video/mp4',
              link: 'sample link',
              title: 'video one'
            },
            {
              id: '4',
              title: 'image three',
              images: [
                {
                  type: 'image/jpeg',
                  link: 'sample link'
                }
              ]
            }
          ],
          promise: {
            getGallery: setPromiseState(false, true, false)
          }
        }
      });

      let masonryComponent = component.find('Masonry');
      expect(masonryComponent.length).toBe(1);
      expect(masonryComponent.props().className).toBe('my-masonry-grid');
      expect(masonryComponent.props().columnClassName).toBe(
        'my-masonry-grid_column'
      );

      let thumbnailComponent = masonryComponent.find('Thumbnail');
      expect(thumbnailComponent.length).toBe(3);
    });
  });
});
