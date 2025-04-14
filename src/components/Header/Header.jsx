import React from "react";
import Logo from "../Logo/Logo";
import MenuMobile from "../MenuMobile/MenuMobile";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import s from "./Header.module.css";

const Header = () => {
  const isMobile = false;

  return (
    <header className={s.header}>
      <Logo />
      <LanguageSwitcher />
      {isMobile && <MenuMobile />}
    </header>
  );
};

export default Header;
