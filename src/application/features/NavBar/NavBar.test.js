import React from 'react';
import { shallow } from 'enzyme';

import NavBar from './NavBar';
import PropTypes from 'prop-types';

describe('<NavBar/>', () => {
  it('renders the NavBar Component', () => {
    const toggleFilterModalMock = jest.fn();

    const props = {
      isFilterModalVisible: false,
      toggleFilterModal: toggleFilterModalMock
    };

    const component = shallow(<NavBar {...props} />);
    expect(component.hasClass('NavBar')).toBeTruthy();

    const navBarComponent = component.find('.NavBar');

    const appHeader = navBarComponent.find('header');
    expect(appHeader.length).toBe(1);
    expect(appHeader.props().className).toBe('App-header');
    expect(appHeader.find('h4').props().children).toBe('Image Gallery');

    const filter = appHeader.find('span');
    expect(filter.length).toBe(1);
    expect(filter.props().id).toBe('filter');
    filter.props().onClick();
    expect(toggleFilterModalMock).toHaveBeenCalled();
  });
});
