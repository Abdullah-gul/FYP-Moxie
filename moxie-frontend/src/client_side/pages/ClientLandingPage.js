import React from "react";
import ClientLandingPageBody from "../components/ClientLandingPageBody";


const ClientLandingPage = (props) => {
  const {questions ,getQuestions,userObjectId,email}=props
  return (
   <div>
   
    <ClientLandingPageBody 
     questions={questions}
     userObjectId ={userObjectId}
     getQuestions={getQuestions}
     email ={email}
    />
   </div>
  );
};

export default ClientLandingPage;
