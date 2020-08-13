import React from 'react';

const Attendee = (props) => {
  const { name } = props.data;

  return <option>{name}</option>;
};

export default Attendee;
