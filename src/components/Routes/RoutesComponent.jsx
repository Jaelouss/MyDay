import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../Loader/Loader";

const Home = lazy(() => import("../../pages/Home/Home"));
const TodoList = lazy(() => import("../../pages/TodoList/TodoList"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));
const Bookmarks = lazy(() => import("../../pages/Bookmarks/Bookmarks"));
const Planner = lazy(() => import("../../pages/Planner/Planner"));
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));

const RoutesComponent = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:lang/" element={<Home />} />
        <Route path="/:lang/todo" element={<TodoList />} />
        <Route path="/:lang/contact" element={<Contacts />} />
        <Route path="/:lang/bookmarks" element={<Bookmarks />} />
        <Route path="/:lang/planner" element={<Planner />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
