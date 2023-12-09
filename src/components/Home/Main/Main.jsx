import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Search from "./Search";
import Busquedas from "./Busquedas";
import Login from "./Login";
import Create from "./Create";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/search" element={<Search/>} />
        <Route path="/misbusquedas" element={<Busquedas/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/*" element={<Navigate to={"/search"} />} />
      </Routes>
    </main>
  )
};

export default Main;
