import React, { useId } from "react";
import s from "./AddTodo.module.css";
import { useAddTodos } from "../../store/todos/todosSelectors";
import { useTranslate } from "../../translate/useTranslate";

export const AddTodo = () => {
  const translate = useTranslate();
  const t = (arg) => translate("addTodo", arg);
  const addTodo = useAddTodos();
  const title = useId();
  const text = useId();

  const saveTask = (e) => {
    e.preventDefault();
    if (
      e.target.elements.text.value === "" ||
      e.target.elements.title.value === ""
    ) {
      return;
    }
    const task = {
      title: e.target.elements.title.value.trim(),
      text: e.target.elements.text.value.trim(),
    };
    addTodo(task);
    e.target.reset();
  };

  return (
    <form onSubmit={saveTask}>
      <label htmlFor={title}>
        {t("title")}
        <input type="text" name="title" id={title} />
      </label>
      <label htmlFor={text}>
        {t("task")}
        <input type="text" name="text" id={text} />
      </label>
      <button type="submit" className={s.button}>
        {t("buttonAdd")}
      </button>
    </form>
  );
};
