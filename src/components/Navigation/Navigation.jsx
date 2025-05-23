import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useLangStore } from "../../store/language/langStore";
import { useTranslate } from "../../translate/useTranslate";

const Navigation = () => {
  const { lang } = useLangStore();
  const { translate } = useTranslate();
  const t = (arg) => translate("menu", arg);
  return (
    <nav className={s.nav}>
      <NavLink className={s.navlink} to={`/${lang}/`}>
        {t("home")}
      </NavLink>
      <NavLink className={s.navlink} to={`/${lang}/todo`}>
        {t("todo")}
      </NavLink>
      <NavLink className={s.navlink} to={`/${lang}/contact`}>
        {t("contacts")}
      </NavLink>
      <NavLink className={s.navlink} to={`/${lang}/bookmarks`}>
        {t("bookmarks")}
      </NavLink>
      <NavLink className={s.navlink} to={`/${lang}/planner`}>
        {t("planner")}
      </NavLink>
      <NavLink className={s.navlink} to={`/${lang}/*`}>
        404
      </NavLink>
    </nav>
  );
};

export default Navigation;
