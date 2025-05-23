import { useState } from "react";
import { useDeleteTodos, useEditTodos } from "../../store/todos/todosSelectors";
import { useTranslate } from "../../translate/useTranslate";
import s from "./TaskItemFullModal.module.css";
import {
  useDeleteContact,
  useEditContact,
} from "../../store/contacts/contactsSelectors";
import { TextAreaWIthAutoHeight } from "../TextAreaWIthAutoHeight/TextAreaWIthAutoHeight";
import {
  useDeleteBookmark,
  useEditBookmark,
} from "../../store/bookmarks/bookmarksSelectors";

export const TaskItemFullModal = ({ type, task, setModalState }) => {
  const [title, setTitle] = useState(task.title);
  const [text, setText] = useState(task.text || task.number || task.url);
  const [editMode, setEditMode] = useState(false);

  const deleteContact = useDeleteContact();
  const editContact = useEditContact();

  const deleteBookmark = useDeleteBookmark();
  const editBookmarks = useEditBookmark();

  const deleteTodo = useDeleteTodos();
  const editTodo = useEditTodos();

  const { translate, currentType } = useTranslate();
  const tBtn = (arg) => translate("taskItemFullModal", arg);
  const t = (arg) => translate(currentType(type), arg);

  const confirmEdit = (e) => {
    e.preventDefault();
    let newTask = {
      title: e.target.elements.title.value,
    };
    if (type === "contacts") {
      newTask = {
        number: e.target.elements.description.value,
      };
    }
    if (type === "bookmarks") {
      newTask = {
        url: e.target.elements.description.value,
      };
    }
    if (type === "todo") {
      newTask = {
        text: e.target.elements.description.value,
      };
    }
    switch (type) {
      case "todo":
        editTodo(task.id, newTask);
        break;
      case "contacts":
        editContact(task.id, newTask);
        break;
      case "bookmarks":
        editBookmarks(task.id, newTask);
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
      case "bookmarks":
        deleteBookmark(id);
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
        {type === "contacts" ? (
          <input
            name={"description"}
            id={"description"}
            type="tel"
            onChange={(e) => setText(e.target.value)}
            value={text}
            disabled={!editMode}
          />
        ) : (
          <TextAreaWIthAutoHeight
            name={"description"}
            id={"description"}
            handleChange={setText}
            value={text}
            mode={!editMode}
          />
        )}
      </div>
      <div>
        {!editMode && (
          <div>
            <button className={s.button_del} onClick={() => setEditMode(true)}>
              {tBtn("buttonEdit")}
            </button>
            <button
              className={s.button_del}
              onClick={() => deleteTask(task.id)}
            >
              {tBtn("buttonDelete")}
            </button>
            <button onClick={() => setModalState(false)}>x</button>
          </div>
        )}
        {editMode && (
          <div>
            <button type="submit">{tBtn("buttonConfirm")}</button>
            <button
              onClick={() => {
                setTitle(task.title);
                setText(task.text);
                setEditMode(false);
              }}
            >
              {tBtn("buttonCancel")}
            </button>
          </div>
        )}
      </div>
    </form>
  );
};
