import React from 'react';
import cx from 'classnames';

const Button = props => {
  const { label, style, disabled, loading } = props;
  const classes = cx('button', style, {
    'is-loading': loading
  });
  return (
    <div className="field">
      <div className="control">
        <button className={classes} disabled={disabled}>
          {label}
        </button>
      </div>
    </div>
  );
};

export default Button;
