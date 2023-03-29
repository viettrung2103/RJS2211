import React, { props } from "react";

const Error = (props) => {
  return <div>{props.error && <p>{props.error} </p>}</div>;
};

export default Error;
