// import { useState } from 'react'

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import FeedComp from "./pages/Feed";
import PetsComp from "./pages/Pets";
import LoginComp from "./pages/login";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/feed"} element={<FeedComp/>} />
          <Route path={"/pets"} element={<PetsComp/>} />
          <Route path={"/login"} element={<LoginComp/>} />
    </Routes>
    </>
  );
}

export default App;
