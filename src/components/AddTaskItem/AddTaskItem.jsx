import React, { useId } from "react";
import s from "./AddTaskItem.module.css";
import { useAddTodos } from "../../store/todos/todosSelectors";
import { useTranslate } from "../../translate/useTranslate";
import { useAddContact } from "../../store/contacts/contactsSelectors";
import { useAddBookmark } from "../../store/bookmarks/bookmarksSelectors";

export const AddTaskItem = ({ type }) => {
  const { translate, currentType } = useTranslate();
  const t = (arg) => translate(currentType(type), arg);

  const title = useId();
  const text = useId();

  const addTodo = useAddTodos();
  const addContact = useAddContact();
  const addBookmark = useAddBookmark();

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
    switch (type) {
      case "todo":
        addTodo(task);
        break;
      case "contacts":
        addContact(task);
        break;
      case "bookmarks":
        addBookmark(task);
        break;
      default:
        return;
    }
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
