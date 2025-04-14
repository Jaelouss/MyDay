import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Aside from "../Aside/Aside";
import s from "./App.module.css";

const App = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Aside />
        <Main />
      </main>
    </>
  );
};

export default App;
