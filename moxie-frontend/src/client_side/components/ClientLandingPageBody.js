import React from "react";
import { useState } from "react";
import Emailverification from "./Emailverification";
import "../css/client-landing-page.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import axios from "axios";
import Clientmodal from "./Clientmodal";
import { useSelector } from "react-redux";
const ClientLandingPageBody = (props) => {
  const {questions ,getQuestions,userObjectId,email}=props
  const[Active,setActive]=useState(false)
  const[SecondActive,setSecondActive]=useState(false)
  const[Service ,setService]=useState("")
  const[postalCode,setPostalCode]=useState("")
  const [ClientAnswer, setClientAnswer] = useState([]);
 

  const user = useSelector((state)=> state.user.value)
 function search(){
  if(Service.length === 0){
  
   alert("ENTER SERVICE")
  }else{
    localStorage.setItem("service", Service.toLocaleLowerCase()); 
    setActive("true")
  }
}


 function postClientData() {
 axios({
   method: "post",
   url: "/clientdata",
   data: {
     user: user.userId,
     mainclient: ClientAnswer ,
     Service: localStorage.getItem("service"),
     pc:postalCode,
  
   },
 })
   .then((responce) => {
     console.log(responce.data.message)
    
     if (responce.data.message.toString() === "question added successfully") {
      setClientAnswer(null)
     } else {
       console.log("sorry");
     }
   })
   .catch((err) => {
     console.log(err);
   });
}

  
  return (
    <div style={{ width: "100%","position":"relative" }}>
      <div className="client-landing-page-wrapper">
        <div className="client-page-heading">
          <p style={{"lineHeight":"1"}}>
            Find the perfect<br/>professional for you
          </p>
          <div className="effect-one">
          <p className="typed-out" style={{ fontSize: "1.8rem", color: "grey" }}>
            Get free quotes within minutes.
          </p>
          </div>
        </div>
      </div>
      <div className="client-inputs">
        <div className="inputs-div one" style={{ width: "25%" }}>
          <input
            className="inputs ab"
            placeholder="What service are you looking for?"
            onChange={(e)=> setService(e.target.value)}
          />
        </div>
        <div className="inputs-div two">
          <LocationOnOutlinedIcon />
          <input onChange={(e)=> setPostalCode(e.target.value)} className="inputs" placeholder="Postcode" />
        </div>
        <div className="client-submit-btn-div">
          <button className="submit-btn" onClick={()=>{ search()}}>Search</button>
        </div>
      </div>
     { Active==="true" && SecondActive === false? <div className="swiper-holder">
      <Clientmodal
      questions={questions}
      userObjectId ={userObjectId}
      getQuestions={getQuestions}
      setActive={setActive}
      setSecondActive={setSecondActive}
      setClientAnswer ={ setClientAnswer}
      ClientAnswer={ClientAnswer}
     /> </div> : Active === false && SecondActive === true? <div className="swiper-holder">
       <Emailverification
        setSecondActive={setSecondActive}
     postClientData={postClientData}
     email={email}
     /></div>:""}
    
    </div>
  );
};

export default ClientLandingPageBody;
