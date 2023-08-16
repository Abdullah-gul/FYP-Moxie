import React from 'react'

import SignupBody from '../components/SignupBody'

const SignupPage = (props) => {
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
    Phone,
    setPhone
  }=props
  return (
    <div>
      
      <SignupBody 
      email={email}
      setEmail={setEmail}
      userPassword={userPassword}
      setUserPassword={setUserPassword}
      firstname={firstname}
      setFirstname={setFirstname}
      lastname={lastname}
      setLastname={setLastname}
      postSignup={postSignup}
      Phone={Phone}
      setPhone={setPhone}
      />
    </div>
  )
}

export default SignupPage