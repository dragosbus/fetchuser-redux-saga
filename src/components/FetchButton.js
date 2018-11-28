import React from 'react';

export const FetchButton = props => {
  const {isFetching, startFetching} = props;
  return(
    <button disabled={isFetching} onClick={startFetching}>
      {
        !isFetching ? 'Get User' : 'Fetching...'
      }
    </button>
  );
};