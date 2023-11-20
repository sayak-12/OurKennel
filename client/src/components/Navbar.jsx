import "./Nav.scss";
import {useState, useEffect} from 'react';
import { useDarkMode } from "../../hooks/DarkmodeProvider";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";
const Navbar = () => {
  const { darkmode, toggleDarkmode } = useDarkMode();
  const [mobile, setMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    // Add an event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    // Update the active link when the location changes
    setActiveLink(location.pathname);
  }, [location.pathname]);
  return (
    <nav
      className={`d-flex w-100 justify-content-between align-items-center ${
        darkmode ? "dark" : ""
      }`} style={{padding: "0 5%"}}
    >
      <div className={`d-flex menuitems ${mobile ? "d-none":""}`} style={{ gap: "10px" }}>
        <Link className={`item ${activeLink === "/" ? "active" : ""}`} to="/">
          Home
        </Link>
        <span className="divider">/</span>
        <Link className={`item ${activeLink === "/feed" ? "active" : ""}`} to="/feed">
          My Feed
        </Link>
        <span className="divider">/</span>
        <Link className={`item ${activeLink === "/pets" ? "active" : ""}`} to="/pets">
          Pet Market
        </Link>
      </div>
      <div
        className="navbar-brand d-flex justify-content-center align-items-center"
        style={{ gap: "10px" }}
      >
        <img src={logo} className="img-fluid rounded-top logo" alt="" />
        OurKennel
      </div>
      <div
        className="users d-flex justify-content-center align-items-center"
        style={{ gap: "15px" }}
      >
        <div className={`username  ${mobile ? "d-none":""}`}>LOGIN</div>
        <span className={`material-symbols-outlined  ${mobile ? "":"d-none"}`}>account_circle</span>
        <span
          className="material-symbols-outlined"
          title={`Switch to ${darkmode ? "light mode" : "dark mode"}`}
          onClick={toggleDarkmode}
        >
          dark_mode
        </span>
        <div className={`menutoggler ${mobile ? "":"d-none"}`} style={{ width: "30px", height: "30px" }}>
          <a
            id="menu-toggle"
            className="menu-toggle"
            onClick={() => document.body.classList.toggle("nav-open")}
          >
            <span className="menu-toggle-bar menu-toggle-bar--top"></span>
            <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
            <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
          </a>
          <div className="mobile-menu d-flex flex-column justify-content-center align-items-center">
          <Link className={`item ${activeLink === "/" ? "active" : ""}`} to="/">
          Home
        </Link>
        <Link className={`item ${activeLink === "/feed" ? "active" : ""}`} to="/feed">
          My Feed
        </Link>
        <Link className={`item ${activeLink === "/pets" ? "active" : ""}`} to="/pets">
          Pet Market
        </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
