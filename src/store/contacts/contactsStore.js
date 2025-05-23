import { nanoid } from "nanoid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useContactsStore = create(
  persist(
    (set) => ({
      contacts: [],
      addContacts: (task) =>
        set((state) => ({
          contacts: [
            ...state.contacts,
            {
              id: nanoid(),
              title: task.title,
              number: task.text,
            },
          ],
        })),
      editContacts: (id, editedContact) =>
        set((state) => ({
          contacts: state.contacts.map((contact) =>
            contact.id === id
              ? {
                  ...contact,
                  title: editedContact.title,
                  number: editedContact.text,
                }
              : contact
          ),
        })),
      deleteContacts: (id) =>
        set((state) => ({
          contacts: state.contacts.filter((contact) => contact.id !== id),
        })),
    }),
    {
      name: "contact-store",
    }
  )
);
