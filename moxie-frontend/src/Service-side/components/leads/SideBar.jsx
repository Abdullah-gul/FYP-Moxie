import React, { Fragment, useEffect, useState } from "react";
import "./SideBar.css";
import MainLeads from "./MainLeads";
import axios from "axios";
import moment from "moment";
import { useDispatch } from "react-redux";
import {userInfo} from "../../../redux/features/serviceSlice"
import { useSelector } from "react-redux";


const SideBar = () => {
  const [Client, setClient] = useState([]);
  const [user, setUser] = useState([]);
  // const [service, setService] = useState("");
  const[local,setLocal]=useState(1)
  const[local2,setLocal2]=useState(1)
  let service1 
  let ser 
  const dispatch = useDispatch()

  const userId = useSelector((state) => state.user.value);

  async function  getService (){
    axios({
        method: "post",
        url: "/getsinglserviceid",
        data: {
          userId: userId.userId,
        },
      })
      .then((res)=>{
        service1 =res.data
        ser = service1.map((e)=>e.service)
        console.log(ser)
        axios({
          method: "post",
          url: "/getclientdata",
          data: {
            service: ser,
          },
        })
          .then((res) => {
            setClient(res.data);
            // console.log(res);
          })
          .catch((err) => {
            
            console.log(err);
            
          });
      })
      .catch((err)=>{
console.log("another soryyy")
      })
    }
//   useEffect  ( ()=>{
//     //--------account holder
//    getService()
// },[])
 
  useEffect(() => {
    getService()
  

    axios({
      method: "get",
      url: "/getuser",
    })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      
     
  },[local]);

 
   const leads = Client?.filter((em)=>( em.professionals_responded < 5)) 
  

  return (
    <Fragment>
      <div className="leads-page-wrapper">
        <div className="side-bar-wrapper">
          <div className="compro">
            <div className="info-side">
              <p>
                53 leads matching your 
                <span style={{ color: "blue" }}> Lead Preferences</span>
              </p>
            </div>
            <div className="user-filter">
              <p style={{ "padding-left": "20px" }}>
                Showing all {leads.length} leads <br />
                <span
                  style={{
                    color: "grey",
                  }}
                >
                  Updated { moment().startOf('hour').fromNow()}
                  
                  <span style={{ color: "blue" }}><button className="refresh-btn" onClick={()=>{setLocal(local +1);  }} style={{"background":"none"}}>Refresh</button></span>
                </span>
              </p>

              <p style={{ "padding-right": "20px" }}>filter</p>
            </div>
          </div>                                                       
          { 
           Client.filter((e2)=> e2.professionals_responded < 5 ).reverse().map((e1,index)=>( 
        <div key={index} className= {`side-main-container`} style={{"boxShadow": index === local2?"0 0 15px 1px rgba(0, 0, 0, 0.4)":""}}
         onClick={()=> {dispatch(userInfo({clientId : e1._id , user1:e1.user})); setLocal2(index)}}>
          <div className="line" style={{"backgroundColor": index === local2?"rgb(45, 122, 241)":"white"}} ></div>
            <div className="name-time-container">
            { user?.filter((e2)=> e1.user === e2._id && e1.professionals_responded < 5  ).map((e2)=>(
              <p>{e2.firstName} <span>{e2.lastName}</span></p>
              ))}

              <p
                style={{
                  backgroundColor: "rgb(71,191,156)",
                  "border-radius": "5px",
                  "padding": "3px",
                  "color": "white",
                  "fontSize": "13px",
                  "font-weight": "400",
                }}
              >
                { moment(e1.createdAt).format("dddd, h:mm a")}
              
              </p>
            </div>

            <div className="category-description">
              <p>{e1.Service}</p>
              <p className="discription">
              {e1.answer}
              </p>
            </div>
            <div className="details">
              <div className="address">Pakistan</div>
              <div className="credits">{e1.credits}</div>
            </div>
          </div>
        ))
       
      } 
        </div>

        {/* ----------------------- */}
        <div className="slected-info-from-sidebar">
          <MainLeads />
        </div>
      </div>
    </Fragment>
  );
};

export default SideBar;
