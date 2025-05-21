import { useContactsStore } from "./contactsStore";

export const useContacts = () => useContactsStore((state) => state.Contacts);
export const useAddContact = () =>
  useContactsStore((state) => state.addContacts);
export const useDeleteContact = () =>
  useContactsStore((state) => state.deleteContacts);
export const useEditContact = () =>
  useContactsStore((state) => state.editContacts);
