import "./Nav.scss";
import { useState, useEffect } from "react";
import { useDarkMode } from "../../hooks/DarkmodeProvider";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext.js";
import logo from "../assets/logo.png";
const Navbar = () => {
  const { user } = useAuthContext();
  const { darkmode, toggleDarkmode } = useDarkMode();
  const [mobile, setMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Update the active link when the location changes
    setActiveLink(location.pathname);
  }, [location.pathname]);
  const navbarStyle = {
    position: scrollPosition > 10 ? "fixed" : "absolute",
    backgroundColor:
      scrollPosition > 10
        ? `${darkmode ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}`
        : "transparent",
    zIndex: 1000,
    backdropFilter: scrollPosition > 10 ? "blur(5px)" : "none",
    boxShadow: scrollPosition > 10 ? "0 0 20px rgba(0, 0, 0, 0.4)" : "none",
    padding: "0 5%",
  };
  return (
    <nav
      className={`d-flex w-100 justify-content-between align-items-center ${
        darkmode ? "dark" : ""
      }`}
      style={navbarStyle}
    >
      <div
        className={`d-flex menuitems ${mobile ? "d-none" : ""}`}
        style={{ gap: "10px" }}
      >
        <Link className={`item ${activeLink === "/" ? "active" : ""}`} to="/">
          Home
        </Link>
        <span className="divider">/</span>
        <Link
          className={`item ${activeLink === "/feed" ? "active" : ""}`}
          to="/feed"
        >
          My Feed
        </Link>
        <span className="divider">/</span>
        <Link
          className={`item ${activeLink === "/pets" ? "active" : ""}`}
          to="/pets"
        >
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
        {user && (
          <div className="user">
            {user.user.profilepic ? (
              <img src={user.user.profilepic} alt="" />
            ) : (
              ""
            )}
            <Link className={`myprofile ${mobile ? "d-none" : ""} item ${activeLink === "/dashboard" ? "active" : ""}`} to="/dashboard">My Profile</Link>
          </div>
        )}
        {!user && (
          <Link
            className={`username  ${mobile ? "d-none" : ""} ${
              activeLink === "/login" ? "active" : ""
            }`}
            to="/login"
          >
            LOGIN / SIGNUP
          </Link>
        )}
        <Link className="userprof" to="/dashboard">
        <span className={`material-symbols-outlined  ${mobile ? "" : "d-none"}`}>
          account_circle
        </span></Link>
        <span
          className="material-symbols-outlined"
          title={`Switch to ${darkmode ? "light mode" : "dark mode"}`}
          onClick={toggleDarkmode}
        >
          {`${darkmode ? "light_mode" : "dark_mode"}`}
        </span>
        <div
          className={`menutoggler ${mobile ? "" : "d-none"}`}
          style={{ width: "30px", height: "30px" }}
        >
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
            <Link
              className={`item ${activeLink === "/" ? "active" : ""}`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`item ${activeLink === "/feed" ? "active" : ""}`}
              to="/feed"
            >
              My Feed
            </Link>
            <Link
              className={`item ${activeLink === "/pets" ? "active" : ""}`}
              to="/pets"
            >
              Pet Market
            </Link>
            {user && (<Link className={`item ${activeLink === "/dashboard" ? "active" : ""}`} to="/dashboard">My Profile</Link>)}
            {!user && (
              <Link
                className={`username ${
                  activeLink === "/login" ? "active" : ""
                }`}
                to="/login"
              >
                LOGIN / SIGNUP
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
