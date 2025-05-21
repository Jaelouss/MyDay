import React from "react";
import Button from "../Button/Button";

import { useLocation, useNavigate } from "react-router-dom";
import { useLangStore } from "../../store/language/langStore";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLangStore();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChangeLang = (newLang) => {
    if (newLang === lang) return;

    setLang(newLang);

    const segments = location.pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/") || `/${newLang}/`;
    navigate(newPath, { replace: true });
  };

  return (
    <div>
      <Button onClick={() => handleChangeLang("en")} type="button">
        en
      </Button>
      <Button onClick={() => handleChangeLang("uk")} type="button">
        uk
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
