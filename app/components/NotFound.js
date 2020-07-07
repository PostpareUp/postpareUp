import React from 'react';

const NotFound = (props) => {
  return (
    <div>The page at {props.location.pathname} does not exist!</div>
  )
}

export default NotFound
