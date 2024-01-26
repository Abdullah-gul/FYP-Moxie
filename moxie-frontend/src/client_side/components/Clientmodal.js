import React, { useState } from "react";
import { useEffect } from "react";

import "../css/clientmodal.css";
const Clientmodal = (props) => {
  const {
    setClientAnswer,
    questions,
    getQuestions,
    setActive,
    setSecondActive,
    ClientAnswer,
  } = props;
  const [num, setNum] = useState(0);

  useEffect(() => {
    getQuestions();
  }, []);

  // handles selection change
  const handleChange = (e) => {
    // setClientAnswer([e.target.value])
    setClientAnswer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  let questions1 = questions.filter((e) => num === e.num * 1);

  function itrat() {
    console.log(num);
    if (num == questions.length - 1) {
      console.log(ClientAnswer);
      console.log("last answer");
    } else {
      setNum(num + 1);
    }
  }
  function itrat2() {
    console.log(num);
    if (num === 0) {
      console.log("sorry");
      setNum(0);
    } else {
      setNum(num - 1);
    }
  }
  

  function checkData() {
    var data1 = Object.entries(ClientAnswer).map((el) => JSON.parse(el[1]));

    if (questions.length === data1.length) {
      setActive(false);
      setSecondActive(true);
    } else {
      alert("answer all");
    }
  }
  function close(){
    setActive(false)
    setSecondActive(false)

  }

  return (
    <div className="form">
      <div className="">
        <div className="progressbar" style={{width: num === 0?"1%" : num ===1 ? "10%" : num === 2 ? "20%" : num === 3 ? "30%": num === 4 ? "50%": num ===5 ? "80%": num === 6 ? "100%" : "100%"}}> 
      </div>
      </div>
   
      <div className="form-container">
        <div className="header"  >
        <button onClick={()=> close()}>X</button>
          <p style={{ fontSize: "20px" }}></p>
        </div>

        <div className="client-body" style={{ overflowY: "scroll" }}>
          {questions1?.map((e1, j) => (
            <div className="webq1container">
              <div className="webq1wrapper">
                <p className="client-questions">{e1.question}</p>

                {e1.answer?.map((e, i) => {
                  return (
                    <div className="webq1-input-container">
                      <input
                        type="radio"
                        key={e1._id}
                        id={e}
                        name={e1._id}
                        value={JSON.stringify({
                          que: e1.question,
                          answer: e,
                          weight: questions1[j].weight[i],
                        })}
                        className="checkbox"
                        onChange={(e) => handleChange(e)}
                      />
                      <label htmlFor={e}>{e}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="footer">
          <button onClick={() => checkData()}>Done</button>
          <button onClick={() => itrat()}>Next</button>
          <button onClick={() => itrat2()}>back</button>
        </div>
      </div>
    </div>
  );
};

export default Clientmodal;
