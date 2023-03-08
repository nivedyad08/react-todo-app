import React from "react";

function Input({ ...rest }) {
  return <input {...rest} type="text" className="input" />;
}

export default Input;
