import React from 'react';  // eslint-disable-line

const Loading = (props) => {
  const { error, timedOut, isLoading } = props;
  let message, details = '';

  if(error) {
    message = 'Error...';
    details = props.error.message;
  }

  if(timedOut) {
    message = 'Compoent take to much time to load';
  }

  if(isLoading) {
    message = 'Loading...';
  }

  return (
    <div className={'loading'}>
      <h2>{message}</h2>
      <p>{details}</p>
    </div>
  );
};

export default Loading;
