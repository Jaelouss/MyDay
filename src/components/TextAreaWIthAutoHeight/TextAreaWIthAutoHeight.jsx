import React, { useEffect, useRef } from "react";
import s from "./TextAreaWIthAutoHeight.module.css";

export const TextAreaWIthAutoHeight = ({
  name,
  id,
  handleChange,
  value,
  mode,
}) => {
  const textareaRef = useRef(null);

  const onChange = () => {
    const textarea = textareaRef.current;

    if (textarea.scrollHeight > 500) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    handleChange(textarea.value);
  };

  useEffect(() => {
    onChange();
  }, []);

  return (
    <textarea
      ref={textareaRef}
      className={s.textarea}
      name={name}
      id={id}
      onChange={onChange}
      type="text"
      value={value}
      disabled={mode}
    />
  );
};
