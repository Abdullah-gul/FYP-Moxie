import React, { useState } from "react";
import { useEffect } from "react";


import "../css/clientmodal.css";
const Clientmodal = (props) => {
  const { setClientAnswer, questions, getQuestions , setActive,setSecondActive,ClientAnswer } = props;
  
 
  // handles selection change
  const handleChange = (e) => {
    // setClientAnswer([e.target.value])
    setClientAnswer(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
  }));
    
  
  };
 
  useEffect(() => {
    getQuestions();
   
  }, []);
  

function checkData(){
  var data1= Object.entries(ClientAnswer).map(el => JSON.parse(el[1]))

  if(questions.length ===  data1.length) {
    setActive(false)
    setSecondActive(true)
  }
else{
  alert("answer all")
}
   
}
  

  return (
    <div className="form">
      <div className="progressbar">
        <div></div>
      </div>
      <div className="form-container">
        <div className="header">
          <p style={{ fontSize: "20px" }}></p>
        </div>

        <div className="client-body" style={{ overflowY: "scroll" }}>
          {questions?.map((e1,j) => (
            <div className="webq1container">
              <div className="webq1wrapper">

                <p className="client-questions">{e1.question}</p>

                {e1.answer?.map((e,i) => 
                 
                 { return  (
                  <div className="webq1-input-container">
                    <input
                      type="radio"
                      key={e1._id}
                      id={e}
                      name={e1._id}
                      value={JSON.stringify( {que: e1.question , answer: e, weight: questions[j].weight[i]})}
                      className="checkbox"
                      onChange={(e)=>handleChange(e)}
                    />
                    <label   htmlFor={e} >{ e}</label>
                  </div>
                )})}
              </div>
            </div>
          ))}
        </div>

        <div className="footer">
          <button onClick={ checkData}>Done</button>
        </div>
      </div>
    
    </div>
  );
};

export default Clientmodal;
