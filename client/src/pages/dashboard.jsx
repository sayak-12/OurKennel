import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { useDarkMode } from "../../hooks/DarkmodeProvider";
import { useState, useEffect } from "react";
import MyDropzone from "../../hooks/Dropzone";
import { useFormContext } from "../../hooks/formContext";
import axios from "axios";
import "./dashboard.scss";
import moment from "moment";
const Dashboard = () => {
  const { darkmode } = useDarkMode();
  const logout = useLogout();
  const { user } = useAuthContext();
  const [profile, setProfile] = useState(null);
  const [edit, setEdit] = useState({
    username: "",
  });
  const [formtype, setFormType] = useState(null);
  const { formVisible, setFormVisible, updateform, setUpdateForm } =
    useFormContext();
  useEffect(() => {
    axios.post("http://localhost:3000/", { user: user.token }).then((res) => {
      if (res.data.error) {
        console.log(res.data);
      }
      setProfile(res.data.user);
      setEdit(res.data.user);
    });
  }, [user.token]);
  const loggout = () => {
    logout();
  };
  const popup = () => {
    setFormVisible(!formVisible);
  };
  const popup2 = () => {
    setUpdateForm(!updateform);
  };
  const updatepopup = (fieldname) => {
    setFormType(fieldname);
    setUpdateForm(!updateform);
  };
  // const review = () => {
  //   axios.post("http://localhost:3000/", { user: user.token }).then((res) => {
  //     if (res.data.error) {
  //       console.log(res.data);
  //     }
  //     setProfile(res.data.user);
  //   });
  // };
  const changeform = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };
  const formupdate = (fieldname) => {
    console.log(fieldname);
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
          <div className={`coverform ${formVisible ? "" : "d-none"}`}>
            <div className="close">
              <ion-icon
                name="close-outline"
                onClick={popup}
                className="close"
                title="Close popup"
              ></ion-icon>
            </div>

            <MyDropzone></MyDropzone>
          </div>
          <div className={`coverform textform ${updateform ? "" : "d-none"}`}>
            <div className="close">
              <ion-icon
                name="close-outline"
                onClick={popup2}
                className="close"
                title="Close popup"
              ></ion-icon>
            </div>
            {profile && formtype && (
              <input
                type="text"
                name={formtype}
                className="w-100 p-2 rounded-1 mb-4"
                value={edit[formtype]}
                onChange={changeform}
              />
            )}
            <span
              className="btn btn-primary px-3"
              onClick={() => {
                formupdate({ type: formtype, value: edit[formtype] });
              }}
            >
              Update
            </span>
          </div>
          <div className={`usersection ${darkmode ? "dark" : ""}`}>
            <div className="pfpsection">
              {profile && profile.profilePic ? (
                <div
                  className="pfpdiv user"
                  title="change your profile picture"
                  onClick={popup}
                >
                  <img
                    src={profile.profilePic}
                    alt="user image"
                    className="pfpofuser"
                  />
                </div>
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
            {profile && (
              <>
                <div className="welcome text-center h2">
                  Welcome to OurKennel,{" "}
                  <span
                    className="username"
                    onClick={() => updatepopup("username")}
                  >
                    {profile.username}
                  </span>
                </div>
                <p className="text-center text-secondary">
                  member since{" "}
                  {moment(profile.createdAt).format("MMMM Do, YYYY")}
                </p>
                <div className="stats">
                  <div className="stat">
                    {profile && profile.listings && (
                      <>
                        <p>{profile.listings.length}</p>
                        <span>listings</span>
                      </>
                    )}
                  </div>
                  <div className="stat">
                    {profile && (
                      <>
                        <p>{profile.pawPoints ? profile.pawPoints : "0"}</p>
                        <span>pawPoints</span>
                      </>
                    )}
                  </div>
                  <div className="stat">
                    {profile && (
                      <>
                        <p>
                          {profile.premiumListings
                            ? profile.premiumListings.length
                            : "0"}
                        </p>
                        <span>premium</span>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
            <div className="buttonwrapper">
              <button className="btn px-3 upd">Update Profile</button>
              <button className="btn btn-danger px-3" onClick={loggout}>
                Log Out
              </button>
            </div>
          </div>
          <div className="posts">
            <h2>Your Listings</h2>
            {profile && (profile.listings.length = 0) ? "No posts to show": "possts"}
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
