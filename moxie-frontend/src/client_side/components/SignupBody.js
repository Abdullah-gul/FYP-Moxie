import React from "react";


import "../css/signupbody.css";


const SignupBody = (props) => {
  const{
    email,
    setEmail,
    userPassword,
    setUserPassword,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    postSignup,
    setPhone,
    Phone
  }=props
  


  function handle() {
    if (email === '' || userPassword === '') {
      console.log(`hi this ${userPassword} `)
     return alert({ message : "wrong credentials" });
    } else {
     
      // navigate("/client-page");
      postSignup(email, userPassword,firstname,lastname,Phone);
     
      
    return 
    }
  }

  return (
    <div >
    <div className="login-main-container-1" >
      <div className="login-body-wrapper-1">
        <div className="box-1">
          <div className="login-text-1">Signup</div>
          <div className="inputcontainer-1">
            <label className="input-label-1">First name</label>
            <input
              type={"text"}
              className="u-input-1"
              onChange={(e) => setFirstname(e.target.value)}
            ></input>
          </div>
          <div className="inputcontainer-1">
            <label className="input-label-1">Last name</label>
            <input
              type={"text"}
              className="u-input-1"
              onChange={(e) => setLastname(e.target.value)}
            ></input>
          </div>
          <div className="inputcontainer-1">
            <label className="input-label-1">phone no.</label>
            <input
              type={"text"}
              className="u-input-1"
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
          <div className="inputcontainer-1">
            <label className="input-label-1">Email</label>
            <input
              type={"text"}
              className="u-input-1"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="inputcontainer-1">
            <label className="input-label-1">
              Password{" "}
              <span>
                <a className="links-1" href="">
                  forgot password?
                </a>
              </span>
            </label>
            <input
              type="password"
              className="u-input-1"
              onChange={(e) => setUserPassword(e.target.value)}
            ></input>
          </div>
          <div className="chexkbox-container-1">
            <input type={"checkbox"} className="input-check-box-1" />
            <label>Remember me</label>
          </div>
          <div className="loginbutn-1">
            {" "}
           <button className="loginButton-1" onClick={handle}>
              Signup
            </button> 
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignupBody;
