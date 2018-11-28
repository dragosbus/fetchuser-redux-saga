import React from 'react';

export const User = props => {
  return props.user ? (
   <React.Fragment>
    <img className="picture" src={props.user.picture.medium}/>
    <p>{props.user.name.first} {props.user.name.last}</p>
   </React.Fragment>
  ) : <p>{props.error}</p>
};