import React, { Children } from "react";

const Button = ({ type, css, children, label = "", onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={css}
        aria-label={label}
        title={label}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
