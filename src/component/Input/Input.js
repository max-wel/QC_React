import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Input = props => {
  const {
    type,
    value,
    placeholder,
    label,
    name,
    onChange,
    errors,
    isRequired
  } = props;
  const classes = cx('input is-medium is-hovered', {
    'is-danger': errors[name]
  });
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className={classes}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          required={isRequired}
        />
      </div>
      {errors[name] && <span className="help is-danger">{errors[name]}</span>}
    </div>
  );
};

Input.defaultProps = {
  errors: {},
  isRequired: false
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  errors: PropTypes.object,
  isRequired: PropTypes.bool
};

export default Input;
