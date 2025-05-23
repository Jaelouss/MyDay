import { useLangStore } from "../store/language/langStore";
import { translates } from "./translation";

export const useTranslate = () => {
  const { lang } = useLangStore();

  const currentType = (type) => {
    switch (type) {
      case "contacts":
        return "addTaskContacts";
      case "bookmarks":
        return "addTaskBookmarks";
      default:
        return "addTaskTodo";
    }
  };

  const translate = (namespace, key) =>
    translates[lang]?.[namespace]?.[key] || key;
  return { translate, currentType };
};
