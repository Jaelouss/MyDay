import React from "react";
import s from "./Aside.module.css";
import Navigation from "../Navigation/Navigation";

const Aside = () => {
  return (
    <aside className={s.aside}>
      <Navigation />
    </aside>
  );
};

export default Aside;
