import React from "react";
import Logo from "../Logo/Logo";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
