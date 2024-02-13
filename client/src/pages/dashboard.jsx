import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { useDarkMode } from "../../hooks/DarkmodeProvider";
import { useState, useEffect } from "react";
import MyDropzone from "../../hooks/Dropzone";
import axios from "axios"
import "./dashboard.scss";
const Dashboard = () => {
  const { darkmode } = useDarkMode();
  const logout = useLogout();
  const { user } = useAuthContext();
  const [profile, setProfile] = useState(null);
  const [formvisible, setFormvisible] = useState(false);
  useEffect(()=>{
    axios.get("http://localhost:3000/", {user:user.token})
    .then((res)=>{
      setProfile(res.data)
    });
    console.log(profile)
  }, [user.token])
  const loggout = () => {
    logout();
  };
  const popup = () => {
    setFormvisible(!formvisible);
  };
  
  
  document.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  document.addEventListener("dragenter", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  document.addEventListener("dragleave", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  document.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  return (
    <>
      {user && (
        
        <>
          <div className={`coverform ${formvisible ? "" : "d-none"}`}>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={popup}
            ></button>
           <MyDropzone></MyDropzone>
           
          </div>
          <div className={`usersection ${darkmode ? "dark" : ""}}`}>
            <div className="pfpsection">
              {user.user.profilepic ? (
                <span>{user.user.profilepic}</span>
              ) : (
                <div
                  className="pfpdiv"
                  title="Add your profile picture"
                  onClick={popup}
                >
                  <ion-icon name="add-outline"></ion-icon>
                </div>
              )}
            </div>
            
            <button className="btn btn-danger px-3" onClick={loggout}>
              Log Out
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
