import React from 'react';
import { shallow } from 'enzyme';
import { ForgotPassword } from './ForgotPassword';
import Input from '../../../component/Input/Input';
import Button from '../../../component/Button/Button';

describe('<ForgotPassword /> Test', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ForgotPassword />);
    expect(wrapper.find(Input)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('renders an error on forgotPassword error', () => {
    const wrapper = shallow(<ForgotPassword error="password-error" />);
    expect(wrapper.contains('password-error')).toBeTruthy();
  });

  it('renders a message on forgotPassword success', () => {
    const wrapper = shallow(<ForgotPassword message="password-success" />);
    expect(wrapper.contains('password-success')).toBeTruthy();
  });

  it('sets loading prop on <Button /> correctly', () => {
    const wrapper = shallow(<ForgotPassword loading />);
    expect(wrapper.containsMatchingElement(<Button loading />)).toBeTruthy();
  });

  it('sets form data correctly', () => {
    const wrapper = shallow(<ForgotPassword />);
    wrapper.instance().handleChange({ target: { value: 'email' } });
    expect(wrapper.instance().state.data).toEqual({ email: 'email' });
  });

  it('should call forgotPassword on submit', () => {
    const forgotPassword = jest.fn();
    const wrapper = shallow(<ForgotPassword forgotPassword={forgotPassword} />);
    wrapper.instance().handleSubmit({ preventDefault: () => {} });
    expect(forgotPassword).toHaveBeenCalledTimes(1);
  });
});
