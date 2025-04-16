import React, { useEffect, useId, useState } from "react";
import s from "./ToDo.module.css";
import Button from "../../components/Button/Button";
import { nanoid } from "nanoid";

const ToDo = () => {
  const [todoData, setTodoData] = useState(() => {
    return JSON.parse(localStorage.getItem("todo")) || [];
  });
  console.log("todoData:", todoData);

  const title = useId();
  const text = useId();

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify([...todoData]));
  }, [todoData]);

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
      id: nanoid(),
    };

    setTodoData([...todoData, task]);
    e.target.reset();
  };

  const deleteTask = (id) => {
    setTodoData((prev) => prev.filter((task) => task.id !== id));
  };
  const handleChange = (e, id) => {
    const check = e.target.checked;
    console.log("check:", check);
    setTodoData((prev) =>
      prev.map((task) => (task.id === id ? { ...task, checked: check } : task))
    );
  };

  return (
    <section>
      <form onSubmit={saveTask}>
        <label htmlFor={title}>
          Title
          <input type="text" name="title" id={title} />
        </label>
        <label htmlFor={text}>
          Task
          <input type="text" name="text" id={text} />
        </label>
        <Button type="submit" title="send task" css={s.button}>
          Send task
        </Button>
      </form>
      <ul>
        {todoData.length > 0 &&
          todoData.map((task) => (
            <li key={task.id}>
              <label htmlFor={task.id}>
                <input
                  onChange={() => handleChange(event, task.id)}
                  type="checkbox"
                  id={task.id}
                />
              </label>
              <div>
                <h2>{task.title}</h2>
                <p>{task.text}</p>
              </div>
              <Button css={s.button_del} onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ToDo;
