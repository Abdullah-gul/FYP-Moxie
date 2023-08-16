import React from "react";
import moment from "moment";
import "./Dashboard.css";
import arrow from "../../asset/down.png";
import Firstcomponent from "../components/home/DashboardComponentone";
import CompanyDetails from "../components/home/CompanyDetails";
import LeadSettings from "../components/home/LeadSettings";
import LeadCount from "../components/home/LeadCount";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const Dashboard = () => {
  const [click, setClick] = useState(false);
  const [user2,setUser] =useState([])
  const user = useSelector((state)=> state.user.value)
  
  useEffect(()=>{

    axios({
      method: "post",
      url: "/getsingleuser",
      data:{ 
        user1 : user.userId
      },
    })
      .then((res) => {
        // console.log(res.data);
        setUser(res.data)
      })
      .catch((err) => {
        console.log(err);
      });

},[])



  var CurrentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
  function handleClick() {
    if (click === false) {
      setClick(true);
    } else {
      setClick(false);
    }
  }
  return (
    <div className="dash-main-container">
      <div className="dash-main-wrapper">
        <div className="dash-wrapper">
          <div className="dash-name-time">
           {user2.map((e)=>( <div className="d-name">hellow, {e.firstName} {e.lastName}</div> ))}
            <div className="d-time">{CurrentDate}</div>
            <div
              className="first-component-m-div"
              onClick={() => handleClick()}
            >
              <div className="dash-c-1">
                <p>
                  Welcome to your new dashboard.  
                 
                  <span
                  className={click === true ? "slide" : "slide1" }
                  style={{"marginLeft":"5px"}}
                  >
                    show
                  </span>
                </p>

                <img
                  className="rotate"
                  style={{
                    width: "15xp",
                    height: "10px",
                    transform:
                      click === true ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  src={arrow}
                  alt="0"
                />
              </div>
              {click === true ? (
                <div className="first-component-inner-div">
                  <Firstcomponent />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className=" second-componenet">
            <div className="s-one"><CompanyDetails/></div>
            <div className="s-one"><LeadSettings/></div>
            <div className="s-one"><LeadCount/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
