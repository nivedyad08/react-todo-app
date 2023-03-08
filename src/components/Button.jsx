import React from "react";

const Button = ({ btnText, textClass, onClick }) => {
  return (
    <button className={textClass} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
