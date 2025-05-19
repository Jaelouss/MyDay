import { useLangStore } from "../store/langStore";
import { translate } from "./translation";

export const useTranslate = () => {
  const { lang } = useLangStore();

  const t = (namespace, key) => translate[lang]?.[namespace]?.[key] || key;
  return t;
};
