import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "../css/login_screen_nave.css";
import logo from "../../asset/pngegg.png";
import { Link } from "react-router-dom";
import {  useLocation } from "react-router-dom";

const LoginNav = (props) => {
  const {ServiceProviderCheck }= props
  const location = useLocation().pathname;
  return (
    <div className="login-nave-main-container">
      <div className="login_nav_wrapper">
        <div className="nav-start">
          <div className="nav-logo-container" style={{ width: "75px"}}>
            <img style={{ width: "100%" }} src={logo} alt="" />
          </div>
          <div className="drop-down">DropDown</div>
        </div>
        <div className="nav-end">
          <div className="nave-bar-text">
          {location === "/"?
            <button className="nav-login-btn"><Link style={{"textDecoration":"none","color":"black"}} 
                to="/signup">Signup</Link></button> :""}
          </div>
          <div className="login-bottun">
            <div>
              <AccountCircleOutlinedIcon />
            </div>
            {location === "/"?"":
            <button className="join-as-pro-btn" onClick={ ()=> ServiceProviderCheck()}>Login as professional</button>
  }
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNav;
