import React from 'react';
import { shallow } from 'enzyme';

import Thumbnail from './Thumbnail';

describe('<Thumbnail />', () => {
  it('renders the thumbnail', () => {
    const onClickMock = jest.fn();

    const props = {
      type: 'primary',
      imageUrl: 'http://testimageurl.png',
      title: 'image title',
      description: 'image description',
      onClick: onClickMock
    };

    const component = shallow(<Thumbnail {...props} />);

    expect(component.hasClass('thumbnail')).toBeTruthy();

    component.props().onClick();

    expect(onClickMock).toHaveBeenCalled();

    const img = component.find('img');
    expect(img.length).toBeTruthy();
    expect(img.props().src).toEqual(props.imageUrl);

    const container = component.find('.container');
    expect(container.length).toBeTruthy();

    expect(container.find('h4').length).toBeTruthy();
    expect(container.find('b').length).toBeTruthy();
    expect(container.find('b').props().children).toBe(props.title);

    expect(container.find('p').length).toBeTruthy();
    expect(container.find('p').props().children).toBe(props.description);
  });
});
