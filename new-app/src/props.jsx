import React from 'react';
import PropTypes from 'prop-types';

export default function PropComponent(props) {
  console.log(typeof props.title);
  console.log(process.env.NODE_ENV); // should print "development"

  return <div>{props.title}</div>;
}

PropComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

PropComponent.defaultProps = {
  title: "vinay",
};
