import { React } from "react";
import { Route, Routes } from "react-router-dom";

import AppHome from "../AppHome/AppHome";
import SinglePage from "../pages/SinglePage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" index element={<AppHome />} />
    <Route path="/categories/:categoryId" index element={<AppHome />} />
    <Route path="/:categoryId/:productId" index element={<SinglePage />} />
  </Routes>
);

export default AppRoutes;
