import React from "react";
import axios from "axios";
import "../css/Emailverification.css";
import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
const Emailverification = (props) => {
  const { setSecondActive,postClientData,email} = props;

  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("click here to generat code");
  
  const user = useSelector((state)=> state.user.value)
  const navigate = useNavigate();

  function postNotification() {
   setMessage3("code is send to your email")
    let result = Math.floor(Math.random() * 100 * 100 * 100 * 10);
    console.log(message);
    axios({
      method: "post",
      url: "/notification",
      data: {
        email: user.email,
        message: result,
      },
    })
      .then((responce) => {
        console.log(responce);
        setMessage(result);
        result = null;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function modal1() {
    console.log(message);
    if (message.toString() === message2.toString() && message2.length !== 0) {
      postClientData()
      setSecondActive(false);
      navigate("/service_list");
      console.log("done ......");
    } else {
      // setSecondActive(false);
      alert("Wrong code .....");
    }
  }
  return (
    <div className="main-email-verification">
      <div className="email-veerification-wrapper">
        <div className="lot-container">
          <p className="ev-top">{user.email}</p>
          <div className="lot">
            <Player
              src="https://assets9.lottiefiles.com/packages/lf20_KSvIE1.json"
              className="player"
              loop={true}
              autoplay
              speed={5}
            />
          </div>
        </div>
        <div className="inp-container">
          <div className="fff">
          <div className="e-vbutn" >
            <button className="evbtn" onClick={() => postNotification()}>generat code</button>
           </div>
           <p className="evtext typed-out">{message3}</p>
          </div>

          <input
          className="evinput"
            placeholder={"code"}
            onChange={(e) => setMessage2(e.target.value)}
          />
          <div className="e-vbutn2" style={{"alignSelf":"flex-end" , "marginRight":"10%"}}>
            <button className="evbtn" onClick={() => modal1()}>Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emailverification;
