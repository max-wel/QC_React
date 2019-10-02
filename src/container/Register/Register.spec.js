import React from 'react';
import { shallow } from 'enzyme';
import { Register } from './Register';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';

describe('<Register /> test', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Register clearErrors={() => {}} />);
    expect(wrapper.find(Input)).toHaveLength(5);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should set errors when passed invalid form data', () => {
    const wrapper = shallow(<Register clearErrors={() => {}} />);
    wrapper
      .instance()
      .handleChange({ target: { name: 'email', value: 'invalid' } });
    expect(wrapper.instance().state.errors).toHaveProperty('email');
  });

  it('should call register on submit', () => {
    const register = jest.fn();
    const wrapper = shallow(
      <Register register={register} clearErrors={() => {}} />
    );
    wrapper.instance().handleSubmit({ preventDefault: () => {} });
    expect(register).toHaveBeenCalledTimes(1);
  });

  it('renders error on register error', () => {
    const authError = 'register error';
    const wrapper = shallow(
      <Register authError={authError} clearErrors={() => {}} />
    );
    expect(wrapper.contains(authError)).toBeTruthy();
  });
});
