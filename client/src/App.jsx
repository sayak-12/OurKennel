// import { useState } from 'react'

import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/About";
import Homepage from "./pages/Home";
function App() {
  return (
    <>
    <Navbar />
    <Homepage />
    <AboutPage />
    </>
  );
}

export default App;
