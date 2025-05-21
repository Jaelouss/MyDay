import { useState } from "react";
import { useDeleteTodos, useEditTodos } from "../../store/todos/todosSelectors";
import { useTranslate } from "../../translate/useTranslate";
import s from "./TaskItemFullModal.module.css";
import {
  useDeleteContact,
  useEditContact,
} from "../../store/contacts/contactsSelectors";

export const TaskItemFullModal = ({ type, task, setModalState }) => {
  const [title, setTitle] = useState(task.title);
  const [text, setText] = useState(task.text);
  const [editMode, setEditMode] = useState(false);

  const deleteContact = useDeleteContact();
  const editContact = useEditContact();

  const deleteTodo = useDeleteTodos();
  const editTodo = useEditTodos();

  const translate = useTranslate();
  const t = (arg) => translate("taskItemFullModal", arg);

  const confirmEdit = (e) => {
    e.preventDefault();
    const newTask = {
      title: e.target.elements.title.value,
      text: e.target.elements.description.value,
    };
    switch (type) {
      case "todo":
        editTodo(task.id, newTask);
        break;
      case "contacts":
        editContact(task.id, newTask);
        break;
      default:
        break;
    }
    setEditMode(false);
  };

  const deleteTask = (id) => {
    switch (type) {
      case "todo":
        deleteTodo(id);
        break;
      case "contacts":
        deleteContact(id);
        break;
      default:
        break;
    }
  };
  return (
    <form onSubmit={confirmEdit}>
      <div>
        <label htmlFor="title">{t("title")}</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          id="title"
          type="text"
          value={title}
          disabled={!editMode}
        />
        <label htmlFor="description">{t("task")}</label>
        <textarea
          onChange={(e) => setText(e.target.value)}
          name="description"
          id="description"
          type="text"
          value={text}
          rows={5}
          disabled={!editMode}
        />
      </div>
      <div>
        {!editMode && (
          <div>
            <button className={s.button_del} onClick={() => setEditMode(true)}>
              {t("buttonEdit")}
            </button>
            <button
              className={s.button_del}
              onClick={() => deleteTask(task.id)}
            >
              {t("buttonDelete")}
            </button>
            <button onClick={() => setModalState(false)}>x</button>
          </div>
        )}
        {editMode && (
          <div>
            <button type="submit">{t("buttonConfirm")}</button>
            <button onClick={() => setEditMode(false)}>
              {t("buttonCancel")}
            </button>
          </div>
        )}
      </div>
    </form>
  );
};
