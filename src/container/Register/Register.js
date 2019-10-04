import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Joi from 'joi-browser';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';
import Navbar from '../../component/Navbar/Navbar';
import {
  register,
  clearErrors
} from '../../redux/actions/authActions/authActions';
import { validate, validateProperty } from '../../utils/validator';

export class Register extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      password: ''
    },
    errors: {}
  };

  schema = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  };

  componentDidMount() {
    this.props.clearErrors();
  }

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
    this.props.register(this.state.data);
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
                <p className="is-size-5" style={{ marginBottom: '0.5em' }}>
                  Register
                </p>
                <form action="" className="box" onSubmit={this.handleSubmit}>
                  {authError && (
                    <p className="help is-danger is-size-6">{authError}</p>
                  )}
                  <Input
                    type="text"
                    label="First Name"
                    name="firstName"
                    placeholder="Ciroma"
                    value={data.firstName}
                    onChange={this.handleChange}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    label="Last Name"
                    name="lastName"
                    placeholder="Adekunle"
                    value={data.lastName}
                    onChange={this.handleChange}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    placeholder="example@gmail.com"
                    label="Email"
                    name="email"
                    value={data.email}
                    onChange={this.handleChange}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    label="Address"
                    name="address"
                    placeholder="Bode Thomas Gardens"
                    value={data.address}
                    onChange={this.handleChange}
                    errors={errors}
                  />
                  <Input
                    type="password"
                    placeholder="*******"
                    label="Password"
                    name="password"
                    value={data.password}
                    onChange={this.handleChange}
                    errors={errors}
                  />
                  <Button
                    label="Register"
                    style="is-medium is-fullwidth is-link"
                    disabled={validate(data, this.schema)}
                    loading={loading}
                  />
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
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

const mapDispatchToProps = {
  clearErrors,
  register: userData => register(userData)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
