import React, { useState } from "react";
import pic from "../../asset/logo5.png";
import "../css/serviceInfo.css";
import axios from "axios";
import down from "../../asset/down.png"
import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



const ServiceInfo = (props) => {
  const user = useSelector((state)=> state.user.value)
  const [companyName, setCompanyName] = useState("");
  const [service, setService] = useState("");
  const [serviceDetails, setServiceDetails] = useState("");
  const [nation, setNation] = useState("");
  const [postalcode,setPostalcode]=useState("")
  const navigate = useNavigate();

  function handle(e){
     setNation(e.target.value)
     
  }

  function handlepostalcode(e){
     setPostalcode(e.target.value)
     
  }

  function ServiceProviderPost() {
    console.log("activated")
    if(companyName === "" || service === "" || nation === ""){
  console.log("sory 000000000")
      alert("soryy")
    }
    
    else{
    axios({
      method: "post",
      url: "/postservice",
      data:{ 
        user : user.userId,
        companyName:companyName,
        service:service,
        details:serviceDetails,
        co_ordinates_provider:postalcode,
        nation:nation
      },
    })
      .then((res) => {
        console.log(res);
       
       if( res.data.message.toString() === "user added successfully" ){
        
        navigate("/leads");
       }else{
        alert("sorry")
       }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <div className="service-info-main-container">
      <div className="service-info-wrapper">
        <div className="info-first-div">
          <div className="infio-main-input-container">
            <label className="infio-label-container">company : </label>
            <input
              className="infio-input-container"
              placeholder="name of your company"
              onChange={(e)=> setCompanyName(e.target.value)}
            />
          </div>
          <div className="infio-main-input-container">
            <label className="infio-label-container">Service : </label>
            <input
              className="infio-input-container"
              placeholder="What service do you provide?"
              onChange={(e)=> setService(e.target.value)}
            />
          </div>
          <div  className="infio-main-input-container">
            <label className="infio-label-container">Details : </label>
            <textarea rows="2" cols="50"  className="infio-input-container"
              placeholder="What service do you provide?"
              onChange={(e)=> setServiceDetails(e.target.value)}></textarea>
          
          </div>
          <div className="infio-main-radio-container">
            <label htmlFor="nation" className="infio-label-container eight">
              I serve customers nation wide :
            </label>
            <input
              name="rr"
              type={"radio"}
              id="nation"
              value={"I serve customers nation wide"}
              onChange={(e)=>handle(e)}
              className="infio-radio-container"
             
            />
          </div>
          <div className="infio-main-radio-container eight">
            <label htmlFor="nation" className="infio-label-container eight">
            I serve customers within :
            </label>
            <input
              name="rr"
              type={"radio"}
              id="nation"
              value={"I serve customers within"}
              className="infio-radio-container"
              onChange={(e)=>handle(e)}
            
            />
            
            
          </div>
          {nation === "I serve customers within" &&
          <div className=" infio-main-radio-container nine">
            <input type={"text"} placeholder="enter postal code" 
             onChange={(e)=> handlepostalcode(e)}
             className="infio-input-container"/> 
          </div>
}
          
          <div className='third-div'>
          <div className="body-buttun-container">
            <button className="body-butn" onClick={()=> ServiceProviderPost()}>See Leads <img src={down}/></button>
            </div>
            </div>
        </div>
        <div className="second-div" style={{ width: "100%" }}>
          <img style={{ width: "100%" }} src={pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
