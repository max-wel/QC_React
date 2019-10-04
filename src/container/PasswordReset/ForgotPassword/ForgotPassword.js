import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../../component/Navbar/Navbar';
import Input from '../../../component/Input/Input';
import Button from '../../../component/Button/Button';
import { forgotPassword } from '../../../redux/actions/passwordResetActions/passwordResetActions';

export class ForgotPassword extends Component {
  state = {
    data: {
      email: ''
    }
  };

  handleChange = ({ target: input }) => {
    const { value } = input;
    const data = { ...this.state.data, email: value };
    this.setState({ data });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.forgotPassword(this.state.data);
  };

  render() {
    const { data } = this.state;
    const { loading, message, error } = this.props;
    return (
      <>
        <Navbar />
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5">
                <p className="is-size-5" style={{ marginBottom: '0.5em' }}>
                  Please Enter Email
                </p>
                <form action="" className="box" onSubmit={this.handleSubmit}>
                  {error && <p className="help is-danger is-size-6">{error}</p>}
                  {message && (
                    <p className="help is-success is-size-6">{message}</p>
                  )}
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    label="Email"
                    name="email"
                    value={data.email}
                    onChange={this.handleChange}
                    isRequired
                  />

                  <Button
                    label="Reset password"
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
  forgotPassword: userData => forgotPassword(userData)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
