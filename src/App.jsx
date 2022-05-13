import { Routes, Route, Outlet } from "react-router-dom";
import React from "react";

import "./App.css";

import Employes from "./publicRoutes/Employes";
import NotFound from "./publicRoutes/NotFound";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index exact path="/" element={<Employes />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const Layout = () => {
  return (
    <div data-theme="lofi">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
