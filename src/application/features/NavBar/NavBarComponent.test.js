import React from 'react';
import { shallow } from 'enzyme';

import NavBarComponent from './NavBarComponent';

describe('<NavBarComponent />', () => {
  it('renders the NavBar Component', () => {
    const component = shallow(<NavBarComponent />);
    expect(component.hasClass('NavBarComponent')).toBeTruthy();

    const navBarComponent = component.find('.NavBarComponent');

    const appHeader = navBarComponent.find('header');
    expect(appHeader.length).toBe(1);
    expect(appHeader.props().className).toBe('App-header');
  });
});
