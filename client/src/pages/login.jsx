import { useDarkMode } from "../../hooks/DarkmodeProvider.jsx";
import darksvg from "../assets/darkmodelogin.svg"
import lightsvg from "../assets/lightmodelogin.svg"
import "./login.scss"
const LoginComp = () => {
    const { darkmode } = useDarkMode();
    return ( 
        <div className={`formsection ${darkmode? "dark":""}`}>
            <div className="left">
                {darkmode ? (<img src={darksvg}></img>):(<img src={lightsvg}></img>)}
            </div>
            <div className="right">
                <form action="" className="myform">
                    <h2>Log In</h2>
                    <div className="field">
                        <label htmlFor="email">Enter Your Email</label>
                        <input type="text" id="email"/>
                    </div>
                    <div className="field">
                        <label htmlFor="pass">Enter Your Password</label>
                        <input type="password" id="pass"/>
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
     );
}
 
export default LoginComp;