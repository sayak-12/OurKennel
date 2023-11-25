// import { useState } from 'react'

import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Home";
import Testimonials from "./pages/Testimonials";
function App() {
  return (
    <>
    <Navbar />
    <Homepage />
    <AboutPage />
    <Testimonials />
    <Contact/>
    </>
  );
}

export default App;
