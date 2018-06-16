import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

jest.mock('./ThumbnailDetail');

import ThumbnailDetailComponent from './ThumbnailDetail';
import ThumbnailDetailContainer from './ThumbnailDetailContainer';
import setPromiseState from '../../shared/utilities/promiseState';

describe('<ThumbnailDetailContainer />', () => {
  const state = {
    gallery: {
      thumbnails: [],
      promise: {
        getThumbnailDetail: setPromiseState()
      },
      selectedThumbnail: {},
      selectedThumbnailImage: ''
    }
  };
  const store = configureMockStore()(state);

  let container, component, componentProps;

  beforeEach(() => {
    spyOn(store, 'dispatch');

    ThumbnailDetailComponent.mockImplementation(() => {
      return {
        render() {
          return <div />;
        }
      };
    });

    const wrapper = mount(
      <Provider store={store}>
        <ThumbnailDetailContainer />
      </Provider>
    );

    container = wrapper.find(ThumbnailDetailContainer);
    component = wrapper.find('ThumbnailDetail');
    componentProps = component.props();
  });

  it('renders the ThumbnailDetailContainer', () => {
    expect(container.length).toBe(1);
    expect(component.length).toBe(1);
  });

  describe('mapStateToProps', () => {
    it('sets the thumbnails prop', () => {
      expect(componentProps.selectedThumbnail).toEqual(
        state.gallery.selectedThumbnail
      );
      expect(componentProps.selectedThumbnailImage).toEqual(
        state.gallery.selectedThumbnailImage
      );
    });
  });
});
