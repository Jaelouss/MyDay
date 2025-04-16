import React, { useContext } from "react";
import Button from "../Button/Button";
import { LanguageContext } from "../../main";

const LanguageSwitcher = () => {
  const { getLang } = useContext(LanguageContext);

  return (
    <div>
      <Button onClick={() => getLang("en")} type="button">
        en
      </Button>
      <Button onClick={() => getLang("uk")} type="button">
        uk
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
