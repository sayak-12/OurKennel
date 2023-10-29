import "./Nav.scss";
import { useDarkMode } from "../hooks/DarkmodeProvider";
import { useState, useEffect } from "react";
const Navbar = () => {
  const { darkmode, toggleDarkmode } = useDarkMode();
  const [placeholder, setPlaceholder] = useState("Search");
  const [mobile, setMobile] = useState(false);
  const handleFocus = () => {
    setPlaceholder("");
  };
  const toggleMobile = () =>{
    
  }
  const handleBlur = () => {
    setPlaceholder("Search");
  };
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
  return (
    <nav className={`navbar navbar-expand-lg ${darkmode ? "dark" : ""}`}>
      <div className={`container-sm ${darkmode ? "dark" : ""}}`}>
        <a className="navbar-brand" href="#">
          OurKennel
        </a>
        <div
          className={`nav-record ${mobile ? `` : `show`}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 me-auto mb-lg-0 list">
            <li className="nav-item">
              <a
                className={`nav-link ${darkmode ? "text-white" : "text-black"}`}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${darkmode ? "text-white" : "text-black"}`}
                href="#"
              >
                adopt
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${darkmode ? "text-white" : "text-black"}`}
                href="#"
              >
                petbook
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${darkmode ? "text-white" : "text-black"}`}
                href="#"
              >
                buy/sell
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${darkmode ? "text-white" : "text-black"}`}
                href="#"
              >
                contact us
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="inp me-2 px-3 rounded-pill outlined"
              type="search"
              placeholder={placeholder}
              aria-label="Search"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button className="btn btn-warning rounded-pill" type="submit">
              Search
            </button>
          </form>
          <span
            className="material-symbols-outlined mx-3 sun"
            title={`Switch to ${darkmode ? "light mode" : "dark mode"}`}
            onClick={toggleDarkmode}
          >{`${darkmode ? "light_mode" : "dark_mode"}`}</span>
        </div>
        <div className={`toggler ${mobile ? `show` : ``}`} onClick={toggleMobile}>
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
