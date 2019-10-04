import React from 'react';
import { shallow } from 'enzyme';
import { ResetPassword } from './ResetPassword';
import Input from '../../../component/Input/Input';
import Button from '../../../component/Button/Button';

describe('<ResetPassword />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ResetPassword />);
    expect(wrapper.find(Input)).toHaveLength(2);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('renders an error on reset password error', () => {
    const wrapper = shallow(<ResetPassword error="password-error" />);
    expect(wrapper.contains('password-error')).toBeTruthy();
  });

  it('renders a message on reset password success', () => {
    const wrapper = shallow(<ResetPassword message="password-success" />);
    expect(wrapper.contains('password-success')).toBeTruthy();
  });

  it('sets loading prop on <Button /> correctly', () => {
    const wrapper = shallow(<ResetPassword loading />);
    expect(wrapper.containsMatchingElement(<Button loading />)).toBeTruthy();
  });

  it('should call resetPassword on submit', () => {
    const resetPassword = jest.fn();
    const wrapper = shallow(
      <ResetPassword resetPassword={resetPassword} location={{ search: '' }} />
    );
    wrapper.instance().handleSubmit({ preventDefault: () => {} });
    expect(resetPassword).toHaveBeenCalledTimes(1);
  });
});
