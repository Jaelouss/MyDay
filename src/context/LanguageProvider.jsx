import React, { useState } from "react";
import { LanguageContext } from "../main";

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  console.log("langProvider:", lang);

  const getLang = (newLang) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, getLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
