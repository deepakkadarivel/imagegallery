import React from 'react';
import { shallow } from 'enzyme';

import RadioInput from './RadioInput';

describe('<RadioInput />', () => {
  it('renders the radio input component', () => {
    const onChangeMock = jest.fn();

    const props = {
      name: 'group',
      value: 'option1',
      label: 'Option 1',
      checkedValue: 'option1',
      onChange: onChangeMock
    };

    const component = shallow(<RadioInput {...props} />);

    expect(component.find('span').length).toBe(1);

    const input = component.find('input');
    expect(input.length).toBe(1);
    expect(input.props().name).toBe(props.name);
    expect(input.props().value).toBe(props.value);
    expect(input.props().checked).toBeTruthy();

    const label = component.find('label');
    expect(label.length).toBe(1);
    expect(label.props().children).toBe(props.label);

    input.props().onChange();
    expect(onChangeMock).toHaveBeenCalled();
  });
});
