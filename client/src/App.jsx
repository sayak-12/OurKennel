// import { useState } from 'react'

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Navbar from "./components/Navbar.jsx";
import FeedComp from "./pages/Feed.jsx";
import PetsComp from "./pages/Pets.jsx";
import LoginComp from "./pages/login.jsx";
import SignUp from "./pages/signup.jsx"
import Dashboard from "./pages/dashboard.jsx";
import { RouteProtection } from "../hooks/RouteProtection.jsx";

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
