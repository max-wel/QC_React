import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';

describe('<Login /> test', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Login />);
    wrapper.setState({ data: {}, errors: {} });
    expect(wrapper.find(Input)).toHaveLength(2);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should set errors when passed invalid form data', () => {
    const wrapper = shallow(<Login />);
    wrapper
      .instance()
      .handleChange({ target: { name: 'email', value: 'invalid' } });
    expect(wrapper.instance().state.errors).toHaveProperty('email');
  });

  it('should call login on submit', () => {
    const login = jest.fn();
    const wrapper = shallow(<Login login={login} />);
    wrapper.instance().handleSubmit({ preventDefault: () => {} });
    expect(login).toHaveBeenCalledTimes(1);
  });

  it('renders error on login error', () => {
    const authError = 'login error';
    const wrapper = shallow(<Login authError={authError} />);
    expect(wrapper.contains(authError)).toBeTruthy();
  });
});
