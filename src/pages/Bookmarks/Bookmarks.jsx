import React from "react";
import { useTranslate } from "../../translate/useTranslate";

const Bookmarks = () => {
  const t = useTranslate();

  return <div>{t("notFound", "title")}</div>;
};

export default Bookmarks;
