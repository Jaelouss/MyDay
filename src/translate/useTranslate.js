import { useLocation, useNavigate } from "react-router-dom";
import { useLangStore } from "../store/langStore";
import { translate } from "./translation";
import { useEffect } from "react";

export const useTranslate = () => {
  const { lang, setLang } = useLangStore();
  const location = useLocation();
  const navigate = useNavigate();

  const initialLang = lang || "en";

  useEffect(() => {
    const validLang = ["uk", "en"];

    const segments = location.pathname.split("/");
    if (validLang.includes(segments[1])) {
      setLang(segments[1]);
    } else {
      setLang(initialLang);
      segments[1] = initialLang;
      const newPath = segments.join("/") || `/en/`;
      navigate(newPath, { replace: true });
    }
  }, [initialLang, location.pathname, navigate, setLang]);

  const t = (namespace, key) => translate[lang]?.[namespace]?.[key] || key;
  return t;
};
