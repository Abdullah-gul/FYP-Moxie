import React from "react";
import "../css/form.css"

const Webq1 = (props) => {
  const {currRef ,questions }=props;
  console.log(questions)
  return (
    <div className="webq1container">
        <div className="webq1wrapper">

          {questions[currRef]?.answer?.map(el =>
          
          (
            
    <>  
    <div className="webq1-input-container">
    <input type="radio" id="html" name="fav_language" value="HTML" />
    <label for="html">{el}</label>
    </div>
   
    </> 
          )
          )
  }
  
   


          
      </div>
    </div>
  );
};

export default Webq1;
