import React from 'react';
import { shallow } from 'enzyme';

import ThumbnailDetail from './ThumbnailDetail';

describe('<ThumbnailDetail />', () => {
  const props = {
    selectedThumbnail: { images: [] },
    selectedThumbnailImage: ''
  };

  it('renders the ThumbnailDetail Component', () => {
    const component = shallow(<ThumbnailDetail {...props} />);
    expect(component.hasClass('thumbnail-detail')).toBeTruthy();
  });

  it('renders the details if selectedThumbnailImage prop exists', () => {
    const component = shallow(<ThumbnailDetail {...props} />);
    expect(component.hasClass('thumbnail-detail')).toBeTruthy();

    component.setProps({
      selectedThumbnail: {
        id: '123',
        title: 'image title',
        description: 'description',
        ups: 12,
        downs: 10,
        score: 123
      },
      selectedThumbnailImage: 'http://sample_image_ref.png'
    });

    const detailCard = component.find('.detail-card');
    expect(detailCard.length).toBe(1);

    const image = detailCard.find('img');
    expect(image.length).toBe(1);
    expect(image.props().src).toBe('http://sample_image_ref.png');
    expect(image.props().alt).toBe('image title');

    const container = detailCard.find('.container');
    expect(container.find('h5').props().children).toBe('image title');
    expect(
      container
        .find('p')
        .first()
        .props().children
    ).toBe('description');

    const voteParagraph = container.find('p').last();
    expect(voteParagraph.find('span').length).toBe(3);
  });

  it('renders no content message if selectedThumbnailImage prop does not exists', () => {
    const component = shallow(<ThumbnailDetail {...props} />);
    expect(component.hasClass('thumbnail-detail')).toBeTruthy();

    const message = component.find('div').last();
    expect(message.props().children).toBe(
      'Nothing to display. Select an image from Gallery'
    );
  });
});
