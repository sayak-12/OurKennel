import { useDarkMode } from "../../hooks/DarkmodeProvider.jsx";
import { useState } from "react";
import {useNavigate, Link} from "react-router-dom"
import darksvg from "../assets/darkmodelogin.svg";
import axios from "axios"
import lightsvg from "../assets/lightmodelogin.svg";
import "./login.scss";
const LoginComp = () => {
  const { darkmode } = useDarkMode();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true)
    axios.post("http://localhost:3000/login", formData)
    .then((res)=>{
      console.log(res);
      setLoading(false)
    })
    .catch((err)=>{
      setLoading(false)
        console.log(err);
        if (err.response) {
          setError(err.response.data.error)
        }
    })
  };
  return (
    <div className={`formsection ${darkmode ? "dark" : ""}`}>
      <div className="left">
        {darkmode ? <img src={darksvg}></img> : <img src={lightsvg}></img>}
      </div>
      <div className="right">
        <form className="myform" onSubmit={handlesubmit}>
          <h2>Log In</h2>
          <div className="field">
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="pass">Enter Your Password</label>
            <input
              type="password"
              id="pass"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          {error && (<span className="error">{error}</span>)}
          <button type="submit"  disabled={loading ? true:false}>{loading ? "Logging you in":"Log In"}</button>
          <span>No account yet? Create an account - <Link to="/signup">Sign Up</Link></span>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;
