import React, { useEffect } from "react";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import s from "./App.module.css";
import RoutesComponent from "../Routes/RoutesComponent";
import { useLangStore } from "../../store/langStore";
import { useLocation, useNavigate } from "react-router-dom";

const App = () => {
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

  return (
    <>
      <Header />
      <main className={s.main}>
        <Aside />
        <RoutesComponent />
      </main>
    </>
  );
};

export default App;
