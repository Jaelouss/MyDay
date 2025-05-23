import React from "react";
import s from "./TaskItem.module.css";
import {
  useDeleteTodos,
  useToggleTodos,
} from "../../store/todos/todosSelectors";
import { useDeleteContact } from "../../store/contacts/contactsSelectors";
import { useDeleteBookmark } from "../../store/bookmarks/bookmarksSelectors";

export const TaskItem = ({ type, task, setModalState, setTaskToEdit }) => {
  const toggleTodo = useToggleTodos();
  const deleteTodo = useDeleteTodos();
  const deleteContact = useDeleteContact();
  const deleteBookmark = useDeleteBookmark();

  const handleChange = (id) => {
    toggleTodo(id);
  };

  const handleOpenModal = () => {
    setModalState(true);
    setTaskToEdit(task);
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
        console.log(type);
        break;
    }
  };

  return (
    <>
      <div onClick={handleOpenModal}>
        {type === "todo" && (
          <label htmlFor={task.id}>
            <input
              onClick={(e) => e.stopPropagation()}
              onChange={() => {
                handleChange(task.id);
              }}
              type="checkbox"
              id={task.id}
              checked={task.complete}
            />
          </label>
        )}
        <div>
          <h2>{task.title}</h2>
          {type === "contacts" && <p>{task.number}</p>}
          {type === "bookmarks" && (
            <a
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              href={task.url}
            >
              {task.url}
            </a>
          )}
        </div>
        <button
          className={s.button_del}
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
        >
          x
        </button>
      </div>
    </>
  );
};
