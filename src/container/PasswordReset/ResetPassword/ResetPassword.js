import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import Navbar from '../../../component/Navbar/Navbar';
import Input from '../../../component/Input/Input';
import Button from '../../../component/Button/Button';
import { resetPassword } from '../../../redux/actions/passwordResetActions/passwordResetActions';

export class ResetPassword extends Component {
  state = {
    data: {
      password: '',
      confirmPassword: ''
    },
    formError: {}
  };

  handleChange = ({ target: input }) => {
    const { name, value } = input;
    const data = { ...this.state.data, [name]: value };
    this.setState({ data });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { password, confirmPassword } = this.state.data;
    const { resetToken } = qs.parse(this.props.location.search);
    const formError = { ...this.state.formError };
    if (password !== confirmPassword) {
      formError.confirmPassword = 'Passwords do not match';
      this.setState({ formError });
      return;
    }
    delete formError['confirmPassword'];
    this.setState({ formError });
    this.props.resetPassword(this.state.data, resetToken);
  };

  render() {
    const { data, formError } = this.state;
    const { loading, message, error } = this.props;
    return (
      <>
        <Navbar />
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5">
                <p className="is-size-5" style={{ marginBottom: '0.5em' }}>
                  Reset Password
                </p>
                <form action="" className="box" onSubmit={this.handleSubmit}>
                  {error && <p className="help is-danger is-size-6">{error}</p>}
                  {message && (
                    <p className="help is-success is-size-6">{message}</p>
                  )}
                  <Input
                    type="password"
                    label="Password"
                    name="password"
                    value={data.password}
                    onChange={this.handleChange}
                    isRequired
                  />
                  <Input
                    type="password"
                    label="Confirm password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={this.handleChange}
                    errors={formError}
                  />

                  <Button
                    label="Save password"
                    style="is-medium is-fullwidth is-link"
                    loading={loading}
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = ({ passwordReset }) => {
  return {
    loading: passwordReset.loading,
    message: passwordReset.message,
    error: passwordReset.error
  };
};

const mapDispatchToProps = {
  resetPassword: (userData, resetToken) => resetPassword(userData, resetToken)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
