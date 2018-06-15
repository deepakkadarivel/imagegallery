import React from 'react';
import { shallow } from 'enzyme';

import ThumbnailDetailComponent from './ThumbnailDetailComponent';

describe('<ThumbnailDetailComponent />', () => {
  const props = {
    selectedThumbnail: { images: [] }
  };

  it('renders the ThumbnailDetail Component', () => {
    const component = shallow(<ThumbnailDetailComponent {...props} />);
    expect(component.hasClass('thumbnail-detail')).toBeTruthy();

    const detailCard = component.find('.detail-card');
    expect(detailCard.length).toBe(1);
    expect(detailCard.find('img').length).toBe(1);
  });
});
