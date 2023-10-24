import './Nav.scss';
import { useDarkMode } from '../hooks/DarkmodeProvider';

const Navbar = () => {
  const { darkmode, toggleDarkmode } = useDarkMode();
  
  return (
    <nav className={`navbar navbar-expand-lg ${darkmode ? 'dark' : ''}`}>
      <div className={`container-md ${darkmode ? 'dark' : ''}}`}>
        <a className="navbar-brand" href="#">
          OurKennel
        </a>
        <button
          className="navbar-toggler text-white" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 me-auto mb-lg-0 list">
            <li className="nav-item">
              <a className={`nav-link ${darkmode ? 'text-white' : 'text-black'}`} aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${darkmode ? 'text-white' : 'text-black'}`} href="#">
                Link
              </a>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input
              className="inp me-2 rounded-pill outlined"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-warning rounded-pill" type="submit">
              Search
            </button>
          </form>
        </div>
        <span className="material-symbols-outlined mx-3 sun" title={`Switch to ${darkmode ? 'light mode' : 'dark mode'}`} onClick={toggleDarkmode}>{`${darkmode ? 'light_mode' : 'dark_mode'}`}</span>
      </div>
    </nav>
  );
};

export default Navbar;
