import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (<button className="login-button" onClick={props.onClick}>{props.name}</button>);
};

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default Button;