import React from 'react';
import LoaderSpinner from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderSpinner
      type="TailSpin"
      style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    />
  );
};

export default Loader;
