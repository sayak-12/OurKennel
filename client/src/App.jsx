// import { useState } from 'react'

import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/About";
import Homepage from "./pages/Home";
import Testimonials from "./pages/Testimonials";
function App() {
  return (
    <>
    <Navbar />
    <Homepage />
    <AboutPage />
    <Testimonials />
    </>
  );
}

export default App;
