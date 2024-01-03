import React from "react";
import Heading from "../heading";
import "../../../assets/css/profile/profile.css";
import { nxtarrow, profileIcon4 } from "../../../assets/images/images";
import { ProfileNavigation } from "../../../assets/const/consts";
import { useDispatch, useSelector } from "react-redux";
import { isNotAuthenticated } from "../../../redux/Slice/authSlice";
import { Outlet, useNavigate } from "react-router-dom";


const Profile = () => {
  const UserName = useSelector((state)=>state.UserInfo.value. Name)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Signout = () => {
    dispatch(isNotAuthenticated());
    navigate("/");
  };
  return (
    <div className="ProfileInfo">
      <div className="path wrapper">
        <p>
          Home{" "}
          <span>
            <img src={nxtarrow} alt="path" />
          </span>
          My Account{" "}
          <span>
            <img src={nxtarrow} alt="path" />
          </span>
          PersonalInfo
        </p>
      </div>
      <div className="informationdashbord wrapper">
        <div className="navigation">
          <div className="heading">
            <Heading headingTxt={`Hello ${UserName} `}/>
            <p className="sub">Welcome to your Account</p>
          </div>
          <div className="navigationOption">
            {ProfileNavigation.map((item) => {
              const { logo, text, path } = item;
              return (
                <div
                  className="option"
                  onClick={() => {
                    navigate(path);
                  }}
                >
                  <i></i>
                  <p>
                    <span>
                      <img src={logo} alt="icon" />
                    </span>
                    {text}
                  </p>
                </div>
              );
            })}
            <div className="option" onClick={Signout}>
              <i></i>
              <p>
                {" "}
                <span>
                  <img src={profileIcon4} alt="icon" />
                </span>
                Signout
              </p>
            </div>
          </div>
        </div>

        <div className="content">
            <Outlet/>
            {/* <OrderDetail/> */}
        </div>
      </div>
    </div>
  );
};
export default Profile;
