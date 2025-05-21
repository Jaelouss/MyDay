import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useLangStore } from "../../store/language/langStore";

const Navigation = () => {
  const { lang } = useLangStore();

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
      <NavLink className={s.navlink} to={`/${lang}/*`}>
        404Page
      </NavLink>
    </nav>
  );
};

export default Navigation;
