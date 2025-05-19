import React from "react";

import { useTranslate } from "../../translate/useTranslate";

const NotFound = () => {
  const t = useTranslate();
  return <div>{t("notFound", "title")}</div>;
};

export default NotFound;
