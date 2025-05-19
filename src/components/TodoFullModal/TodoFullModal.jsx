import { useState } from "react";
import { useDeleteTodos, useEditTodos } from "../../store/todos/todosSelectors";
import { useTranslate } from "../../translate/useTranslate";
import s from "./TodoFullModal.module.css";

export const TodoFullModal = ({ todo, setModalState }) => {
  const [title, setTitle] = useState(todo.title);
  const [text, setText] = useState(todo.text);
  const [editMode, setEditMode] = useState(false);

  const deleteTodo = useDeleteTodos();
  const editTodo = useEditTodos();

  const translate = useTranslate();
  const t = (arg) => translate("todoFullModal", arg);

  const closeModal = () => {
    setModalState(false);
  };

  const confirmEdit = (e) => {
    e.preventDefault();
    const newTodo = {
      title: e.target.elements.title.value,
      text: e.target.elements.description.value,
    };

    editTodo(todo.id, newTodo);
    setEditMode(false);
  };

  const hadleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const hadleChangeText = (e) => {
    setText(e.target.value);
  };

  const editTask = () => {
    setEditMode(true);
  };
  const closeEditMode = () => {
    setEditMode(false);
  };
  const deleteTask = (id) => {
    deleteTodo(id);
  };
  return (
    <form onSubmit={confirmEdit}>
      <div>
        <label htmlFor="title">{t("title")}</label>
        <input
          onChange={hadleChangeTitle}
          name="title"
          id="title"
          type="text"
          value={title}
          disabled={!editMode}
        />
        <label htmlFor="description">{t("task")}</label>
        <textarea
          onChange={hadleChangeText}
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
            <button className={s.button_del} onClick={() => editTask()}>
              {t("buttonEdit")}
            </button>
            <button
              className={s.button_del}
              onClick={() => deleteTask(todo.id)}
            >
              {t("buttonDelete")}
            </button>
            <button onClick={closeModal}>x</button>
          </div>
        )}
        {editMode && (
          <div>
            <button type="submit">{t("buttonConfirm")}</button>
            <button onClick={closeEditMode}>{t("buttonCancel")}</button>
          </div>
        )}
      </div>
    </form>
  );
};
