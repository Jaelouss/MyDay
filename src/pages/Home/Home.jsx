import React from "react";
// import s from "./Home.module.css";
import RoutesComponent from "../../components/Routes/RoutesComponent";
import { useTranslate } from "../../translate/useTranslate";

const Home = () => {
  const { translate } = useTranslate();
  const t = (arg) => translate("home", arg);
  return (
    <section>
      <h1>{t("title")}</h1>
      <p>{t("text")}</p>
    </section>
  );
};

export default Home;
