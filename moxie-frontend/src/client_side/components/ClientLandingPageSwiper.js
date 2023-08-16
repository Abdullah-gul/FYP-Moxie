import React from 'react'
import Webq1 from './Webq1';

import "../css/form.css"
import { useEffect } from 'react';
const ClientLandingPageSwiper = (props) => {
   
    const {questions ,getQuestions}=props
    
  useEffect(()=>{
    getQuestions()
    
  },[])
   //           making states
    
    const PageDisplay = () => {
  
        return <Webq1   questions={questions}  currRef={0} />;
     
    };
    
   
  
    return (
      <div className="form">
        <div className="progressbar">
          <div
            // style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
          ></div>
        </div>
        <div className="form-container">
        
        {/* {questions?.map((e1)=>( */}
          <div className="header">
         
            <p style={{"fontSize":"20px"}}>{questions?.question[0]}</p>
         
          </div>
            {/* ))}  */}
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
             
            >
              Prev
            </button>
            <button
              onClick={() => {
                
                
                // if (page === FormTitles.length - 1) {
                //   alert("FORM SUBMITTED");
                //   console.log(formData);
                // } else {
                //   setPage((currPage) => currPage + 1);
                // }
              }}
            >
              {/* {page === FormTitles.length - 1 ? "Submit" : "Next"} */}Next
            </button>
          </div>
        </div>
      </div>
    );
  
}

export default ClientLandingPageSwiper