import React from "react";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import Aside from "../Aside/Aside";
import s from "./App.module.css";
import RoutesComponent from "../Routes/RoutesComponent";

const App = () => {
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
