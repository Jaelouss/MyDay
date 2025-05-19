import { useState } from "react";
import s from "./ToDo.module.css";
import Button from "../../components/Button/Button";
import { useTodos } from "../../store/todos/todosSelectors";
import { TodoFullModal } from "../../components/TodoFullModal/TodoFullModal";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { AddTodo } from "../../components/AddTodo/AddTodo";

const TodoList = () => {
  const todos = useTodos();

  const [modalState, setModalState] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <section>
      {modalState && (
        <TodoFullModal todo={taskToEdit} setModalState={setModalState} />
      )}
      <AddTodo />
      <ul>
        {todos.length > 0 &&
          todos.map((task) => (
            <li key={task.id}>
              <TodoItem
                task={task}
                setModalState={setModalState}
                setTaskToEdit={setTaskToEdit}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default TodoList;
