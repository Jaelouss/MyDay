import React from "react";
import s from "./TaskItem.module.css";
import {
  useDeleteTodos,
  useToggleTodos,
} from "../../store/todos/todosSelectors";

export const TaskItem = ({ type, task, setModalState, setTaskToEdit }) => {
  const toggleTodo = useToggleTodos();
  const deleteTodo = useDeleteTodos();

  const handleChange = (id) => {
    toggleTodo(id);
  };

  const handleOpenModal = () => {
    setModalState(true);
    setTaskToEdit(task);
  };

  const deleteTask = (id) => {
    deleteTodo(id);
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
          {type !== "todo" && <p>{task.text}</p>}
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
