import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { LanguageContext } from "../../main";

const Navigation = () => {
  const { lang } = useContext(LanguageContext) || { lang: "uk" };
  console.log("lang:", lang);

  return (
    <nav className={s.nav}>
      <NavLink className={s.navlink} to={`/${lang}/`}>
        Home
      </NavLink>
      <NavLink className={s.navlink} to={`/${lang}/todo`}>
        ToDo
      </NavLink>
      <NavLink className={s.navlink} to={`/${lang}/contact`}>
        Contacts
      </NavLink>
      <NavLink className={s.navlink} to={`/${lang}/bookmarks`}>
        Bookmarks
      </NavLink>
      <NavLink className={s.navlink} to={`/${lang}/planner`}>
        Planner
      </NavLink>
      <NavLink className={s.navlink} to="*">
        404Page
      </NavLink>
    </nav>
  );
};

export default Navigation;
