import React, { useState } from "react";
import { TaskItemFullModal } from "../../components/TaskItemFullModal/TaskItemFullModal";
import { useContacts } from "../../store/contacts/contactsSelectors";
import { AddTaskItem } from "../../components/AddTaskItem/AddTaskItem";

const Contacts = () => {
  const contacts = useContacts();
  const [modalState, setModalState] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <section>
      {modalState && (
        <TaskItemFullModal
          type={"contacts"}
          task={taskToEdit}
          setModalState={setModalState}
        />
      )}
      <AddTaskItem type={"contacts"} />
      <ul>
        {contacts.length > 0 &&
          contacts.map((task) => (
            <li key={task.id}>
              <TaskItem
                type={"contacts"}
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

export default Contacts;
