import React, { lazy, Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../Loader/Loader";
import { LanguageContext } from "../../main";

const Home = lazy(() => import("../../pages/Home/Home"));
const ToDo = lazy(() => import("../../pages/ToDo/ToDo"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));
const Bookmarks = lazy(() => import("../../pages/Bookmarks/Bookmarks"));
const Planner = lazy(() => import("../../pages/Planner/Planner"));
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));

const RoutesComponent = () => {
  const { lang } = useContext(LanguageContext) || { lang: "uk" };
  console.log("lang:", lang);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={`/${lang}/`} element={<Home />} />
        <Route path={`/${lang}/todo`} element={<ToDo />} />
        <Route path={`/${lang}/contact`} element={<Contacts />} />
        <Route path={`/${lang}/bookmarks`} element={<Bookmarks />} />
        <Route path={`/${lang}/planner`} element={<Planner />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
