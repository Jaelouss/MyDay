import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../Loader/Loader";

const Home = lazy(() => import("../../pages/Home/Home"));
const ToDo = lazy(() => import("../../pages/ToDo/ToDo"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));
const Bookmarks = lazy(() => import("../../pages/Bookmarks/Bookmarks"));
const Planner = lazy(() => import("../../pages/Planner/Planner"));
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));

const RoutesComponent = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path={`/:lang/*`}
          element={
            <Routes>
              <Route index element={<Home />} />
              <Route path="todo" element={<ToDo />} />
              <Route path="contact" element={<Contacts />} />
              <Route path="bookmarks" element={<Bookmarks />} />
              <Route path="planner" element={<Planner />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
