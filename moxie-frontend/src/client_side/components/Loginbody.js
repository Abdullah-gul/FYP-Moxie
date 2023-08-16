import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef } from "react";
 import axios from "axios";
import "../css/loginbody.css";

const Loginbody = (props) => {
  const { email, setEmail, userPassword, setUserPassword, postLogin ,setUserObjectId,usertObjectId} = props;
  
  // useEffect(()=>{
  //   const data = JSON.parse(localStorage.getItem("id"))
  //   if(data != undefined) {
  //     setUserObjectId(data )
  //   console.log(first)
  //   }


  //     //    axios({
  //     //   method: "post",
  //     //   url: "/getuser",
  //     //   data: {
  //     //   userid: usertObjectId,
  //     //   },
  //     // })
  //     //   .then((responce) => {
  //     //     if (responce.data.message === "login successfull") {
  //     //     //  console.log(responce.data)
  //     //      setEmail(responce.data.email)
           
  //     //     } else {
  //     //       console.log("sorry");
  //     //     }
  //     //   })
  //     //   .catch((err) => {
  //     //     console.log(err);
  //     //   });

  //     },[])

  //   useEffect(()=>{
  //      localStorage.setItem("id",JSON.stringify(usertObjectId));
  //      console.log(usertObjectId)

    
    
  //   },[email])

  function handle() {
    if (email === "" || userPassword === "") {
      return alert({ message: "wrong credentials" });
    } else {
      // navigate("/client-page");
      postLogin(email, userPassword);

      return;
    }
  }

  return (
    <div className="login-main-container">
     
      <div className="login-body-wrapper">
        <div className="box">
          <div className="lotti">
            <div className="login-text">Login</div>
            <div className="lottiecontainer">
              <Player
                src="https://assets7.lottiefiles.com/packages/lf20_mhdn5srg.json"
                className="player"
                loop={true}
                autoplay
                speed={5}
              />
            </div>
          </div>
          <div className="inputcontainer">
            <label className="input-label">Email</label>
            <input
              type={"text"}
              className="u-input"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="inputcontainer">
            <label className="input-label">
              Password{" "}
              <span>
                <a className="links" href="">
                  forgot password?
                </a>
              </span>
            </label>
            <input
              type="password"
              className="u-input"
              onChange={(e) => setUserPassword(e.target.value)}
            ></input>
          </div>
          <div className="chexkbox-container">
            <input type={"checkbox"} className="input-check-box" />
            <label>Remember me</label>
          </div>
          <div className="loginbutn">
            {" "}
            <button className="loginButton" onClick={handle}>
              Login
            </button>
          </div>
        </div>
        </div>
      
    </div>
  );
};

export default Loginbody;
