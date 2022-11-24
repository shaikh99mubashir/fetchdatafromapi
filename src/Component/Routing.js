import React from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "./Appbar";
import Dashboard from "./Dashboard";
import Home from "./Home";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="home" element={<Home/>} />
      </Routes>
    </>
  );
};

export default Routing;
