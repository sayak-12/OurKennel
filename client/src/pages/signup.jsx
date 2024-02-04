import { useDarkMode } from "../../hooks/DarkmodeProvider.jsx";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import darksvg from "../assets/darkmodelogin.svg";
import axios from "axios";
import lightsvg from "../assets/lightmodelogin.svg";
import validator from "validator";
import "./login.scss";
import { useAuthContext } from "../../hooks/useAuthContext.js";
const LoginComp = () => {
  const { darkmode } = useDarkMode();
  const {dispatch} = useAuthContext();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    if (!validator.isEmail(formData.email)) {
      setError("This is not a valid email address");
      setLoading(false)
    } else if (
      !validator.isStrongPassword(formData.password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setError(
        "Password must contain 1 uppercase, 1 lowercase, 1 number and 1 symbols and must be minimum 8 characters"
      );
      setLoading(false)
    } else {
      axios
        .post("http://localhost:3000/signup", formData)
        .then((res) => {
          console.log(res);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          dispatch({type: "LOGIN", payload : {user:res.data.user, token:res.data.token}})
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          if (err.response) {
            setError(err.response.data.error);
          }
        });
    }
  };
  return (
    <div className={`formsection ${darkmode ? "dark" : ""}`}>
      <div className="left">
        {darkmode ? <img src={darksvg}></img> : <img src={lightsvg}></img>}
      </div>
      <div className="right">
        <form className="myform" onSubmit={handlesubmit}>
          <h2>Sign Up</h2>
          <div className="field">
            <label htmlFor="username">Enter Your Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
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
          {error && <span className="error">{error}</span>}
          <button type="submit" disabled={loading ? true : false}>
            {loading ? "Signing you up" : "Sign Up"}
          </button>
          <span>
            Already have an account? Log in here -{" "}
            <Link to="/login">Log In</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;
