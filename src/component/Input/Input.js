import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Input = props => {
  const { type, value, placeholder, label, name, onChange, errors } = props;
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
        />
      </div>
      {errors[name] && <span className="help is-danger">{errors[name]}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default Input;
