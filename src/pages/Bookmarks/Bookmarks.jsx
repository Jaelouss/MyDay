import React, { useState } from "react";

import { useBookmarks } from "../../store/bookmarks/bookmarksSelectors";
import { TaskItemFullModal } from "../../components/TaskItemFullModal/TaskItemFullModal";
import { AddTaskItem } from "../../components/AddTaskItem/AddTaskItem";
import { TaskItem } from "../../components/TaskItem/TaskItem";

const Bookmarks = () => {
  const bookmarks = useBookmarks();
  const [modalState, setModalState] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <section>
      {modalState && (
        <TaskItemFullModal
          type={"bookmarks"}
          task={taskToEdit}
          setModalState={setModalState}
        />
      )}
      <AddTaskItem type={"bookmarks"} />
      <ul>
        {bookmarks.length > 0 &&
          bookmarks.map((task) => (
            <li key={task.id}>
              <TaskItem
                type={"bookmarks"}
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

export default Bookmarks;
