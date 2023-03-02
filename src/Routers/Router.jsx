import React from "react";
import { Route, Routes } from "react-router-dom";
import AllUsers from "../components/AllUsers";
import Home from "../components/Home/Home";
import Layout from "../Layout/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="allUsers" element={<AllUsers />} />
      </Route>
    </Routes>
  );
};

export default Router;
