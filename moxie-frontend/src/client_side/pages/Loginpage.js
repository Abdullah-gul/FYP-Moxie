import React from "react";

import Loginbody from "../components/Loginbody";

const Loginpage = (props) => {
  const { email, setEmail, userPassword, setUserPassword, postLogin,setUserObjectId,usertObjectId } = props;

  return (
    <div>
      
      <Loginbody
        email={email}
        setEmail={setEmail}
        userPassword={userPassword}
        setUserPassword={setUserPassword}
        postLogin={postLogin}
        setUserObjectId={setUserObjectId}
              usertObjectId={usertObjectId}
      />
    </div>
  );
};

export default Loginpage;
