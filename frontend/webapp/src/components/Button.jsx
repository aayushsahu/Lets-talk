import React from "react";

const Button = (props) => {
    return (<button className="login-button" onClick={props.onClick}>{props.name}</button>);
};

export default Button;