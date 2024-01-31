import { useDarkMode } from "../../hooks/DarkmodeProvider.jsx";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import darksvg from "../assets/darkmodelogin.svg";
import axios from "axios"
import lightsvg from "../assets/lightmodelogin.svg";
import "./login.scss";
const LoginComp = () => {
  const { darkmode } = useDarkMode();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData.email, formData.password);
    axios.post("http://localhost:3000/login", formData)
    .then((res)=>{
      alert(res.data.formdata.email)
        // navigate("/");
    })
    .catch((err)=>{
        console.log(err);
        alert("some error occured!");
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
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;
