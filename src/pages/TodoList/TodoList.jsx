import { useState } from "react";
// import s from "./ToDo.module.css";

import { useTodos } from "../../store/todos/todosSelectors";
import { TaskItemFullModal } from "../../components/TaskItemFullModal/TaskItemFullModal";
import { TaskItem } from "../../components/TaskItem/TaskItem";
import { AddTaskItem } from "../../components/AddTaskItem/AddTaskItem";

const TodoList = () => {
  const todos = useTodos();

  const [modalState, setModalState] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <section>
      {modalState && (
        <TaskItemFullModal task={taskToEdit} setModalState={setModalState} />
      )}
      <AddTaskItem type={"todo"} />
      <ul>
        {todos.length > 0 &&
          todos.map((task) => (
            <li key={task.id}>
              <TaskItem
                type={"todo"}
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
