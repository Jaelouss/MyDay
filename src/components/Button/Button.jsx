import React from "react";

const Button = ({ type, css, text = "", label = "" }) => {
  return (
    <>
      <button type={type} className={css} aria-label={label} title={label}>
        {text}
      </button>
    </>
  );
};

export default Button;
