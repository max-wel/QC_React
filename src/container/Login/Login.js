import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Joi from 'joi-browser';
import Navbar from '../../component/Navbar/Navbar';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';
import { validate, validateProperty } from '../../utils/validator';
import 'bulma/css/bulma.css';
import { login } from '../../redux/actions/authActions';

export class Login extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  };

  handleChange = ({ target: input }) => {
    const { name, value } = input;
    const data = { ...this.state.data };
    data[name] = value;
    // validate input
    const errorMessage = validateProperty(input, this.schema);
    const errors = { ...this.state.errors };
    if (errorMessage) {
      errors[name] =
        errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
    } else {
      delete errors[name];
    }
    this.setState({ data, errors });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.data);
  };

  render() {
    const { data, errors } = this.state;
    const { loading, authError } = this.props;
    return (
      <>
        <Navbar />
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5">
                <form action="" className="box" onSubmit={this.handleSubmit}>
                  {authError && (
                    <p className="help is-danger is-size-6">{authError}</p>
                  )}
                  <Input
                    type="text"
                    placeholder="example@gmail.com"
                    label="Email"
                    name="email"
                    onChange={this.handleChange}
                    errors={errors}
                  />
                  <Input
                    type="password"
                    placeholder="*******"
                    label="Password"
                    name="password"
                    onChange={this.handleChange}
                    errors={errors}
                  />
                  <Button
                    label="Login"
                    style="is-medium is-fullwidth is-link"
                    disabled={validate(data, this.schema)}
                    loading={loading}
                  />
                  <p>
                    Don't have an account? <Link to="">Register</Link>
                  </p>
                  <Link to="">Forgot password?</Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    loading: auth.loading,
    authError: auth.error
  };
};

const mapDispatchToProps = dispatch => ({
  login: userData => dispatch(login(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
