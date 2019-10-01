import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Input from './Input';

describe('<Input /> tests', () => {
  it('renders an <Input /> component', () => {
    const props = {
      type: '',
      placeholder: '',
      label: '',
      name: '',
      onChange: jest.fn(),
      errors: {}
    };
    const output = renderer.create(<Input {...props} />);
    expect(output).toMatchSnapshot();
  });

  it('renders error text on input error', () => {
    const props = {
      name: 'email',
      errors: {
        email: 'Error'
      }
    };
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.contains('Error')).toBeTruthy();
  });
});
