// import { useState } from 'react'

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import FeedComp from "./pages/Feed";
import PetsComp from "./pages/Pets";
import LoginComp from "./pages/login";
import SignUp from "./pages/signup"
import Dashboard from "./pages/dashboard";
import { RouteProtection } from "../hooks/RouteProtection";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/feed"} element={<FeedComp/>} />
          <Route path={"/pets"} element={<PetsComp/>} />
          <Route path={"/login"} element={<RouteProtection route="login"><LoginComp/></RouteProtection>} />
          <Route path={"/signup"} element={<RouteProtection route="login"><SignUp/></RouteProtection>} />
          <Route path={"/dashboard"} element={<RouteProtection route="dashboard"><Dashboard/></RouteProtection>} />
    </Routes>
    </>
  );
}

export default App;
