import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { useDarkMode } from "../../hooks/DarkmodeProvider";
import { useState } from "react";

import "./dashboard.scss";
const Dashboard = () => {
  const { darkmode } = useDarkMode();
  const logout = useLogout();
  const { user } = useAuthContext();
  const [formvisible, setFormvisible] = useState(false);
  const [file, setFile] = useState(null);
  const loggout = () => {
    logout();
  };
  const popup = () => {
    setFormvisible(!formvisible);
  };
  const filehandle = (e) => {
    const selectedFile = e.target.files;
    console.log(selectedFile);
  if (selectedFile) {
    setFile("download");
    console.log("hi");
  }
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
            <form className="profilepicform">
            <div className="filewrapper"
  onDragOver={(e) => {
    e.preventDefault();
    e.stopPropagation();
    document.querySelector('.filewrapper').style.backgroundColor = "rgba(255,255,255,0.5)"
  }}
  onDragEnter={(e) => {
    e.preventDefault();
    e.stopPropagation();
    document.querySelector('.filewrapper').style.backgroundColor = "rgba(255,255,255,0.5)"
  }}
  onDragLeave={(e) => {
    e.preventDefault();
    e.stopPropagation();
    document.querySelector('.filewrapper').backgroundColor = file ? "#b5b5b5" : "rgba(255,255,255,0.5)";
  }}
  onDrop={(e) => {
    e.preventDefault();
    e.stopPropagation();
    filehandle(e);
    document.querySelector('.filewrapper').style.backgroundColor = "#b5b5b5";
  }}
>
  {file ? (
    <span style={{ position: "absolute" }}>{file}</span>
  ) : (
    <span style={{ position: "absolute" }}>upload or drag & drop a file</span>
  )}
  <input
    type="file"
    name="file"
    id=""
    className="file"
    onChange={filehandle}
  />
</div>


              <button
                className="btn btn-primary"
                type="submit"
                disabled={file ? false : true}
              >
                Set Profile Picture
              </button>
            </form>
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
