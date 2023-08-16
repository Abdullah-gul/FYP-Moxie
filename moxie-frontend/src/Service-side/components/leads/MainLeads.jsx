import React, { useEffect } from "react";
import "./MainLeads.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";

import { useState } from "react";
const MainLeads = () => {
  const [client, setClient] = useState([]);
  // const [clientid, setClientid] = useState("");
  const [user, setUser] = useState([]);
  const [service, setService] = useState([]);
 
  // const [contact ,setContact]=useState([])

  const [local, setLocal] = useState(0);
  //  const[address,setAddress]=useState([])
  //  const[post,setPost]=useState()
  //  const [country,setCountry]=useState()

  const client1 = useSelector((state) => state.service.value);
  const userId = useSelector((state) => state.user.value);

  // console.log(`client id ${client1.clientId}`)
  // console.log(`user id ${client1.user1}`)
  // console.log(`user id in service ${userId.userId}`)
 

  useEffect(() => {
    axios({
      method: "post",
      url: "/getsingleclient",
      data: {
        client1: client1.clientId,
      },
    })
      .then((res) => {
        console.log(res.data);
        setClient(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios({
      method: "post",
      url: "/getsingleuser",
      data: {
        user1: client1.user1,
      },
    })
      .then((res) => {
        // console.log(res);
        setUser(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
      
      axios({
        method: "post",
        url: "/getsinglserviceid",
        data: {
          userId: userId.userId,
        },
      })
        .then((res) => {
          // console.log(res.data);
          setService(res.data);
       
        })
        .catch((err) => {
          console.log(err);
        });
    
  
  }, [client1]);

  function responded() {
    const num = 1;
  //  setClientid(
  //    client1.clientId
  // )
  let contact = client1.clientId
// console.log(clientid.map((e)=> JSON.parse(e.client)))

    axios({
      method: "post",
      url: "/responded",
      data: {
        userid: contact,
        serviceid: userId.userId,
        singleclient:client1.clientId,
        responded: num,
      },
    })
      .then((res) => {
        setLocal(local + 1);
        contact =""
        console.log(local);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="main-leads-container">
      {client !== undefined && client?.map((e) => (
       
        <div className="main-leads-wrapper">
          <div className="selected-name-time">
            {user?.map((elem) => (
              <div className="slected-name">
                <p>
                  {elem.firstName} <span>{elem.lastName}</span>
                </p>
              </div>
            ))}
            <div className="time-updated">
              <p style={{ fontSize: "17px", fontWeight: "600", color: "grey" }}>
                {moment(e.createdAt).format("dddd, MMMM Do YYYY, h:mm a")}
              </p>
            </div>
          </div>
          <div className="leads-details">
            <div className="client-details-work">
              <p>{e.Service}</p>
            </div>
            {e.address
              ?.map((emn) => JSON.parse(emn))
              .map((e2) => (
                <div className="client-details-adress">
                  <p>{e2.display_name}</p>
                </div>
              ))}
            <div className="client-details-link">
              <p>Happy to receive service online or remotely</p>
            </div>
            {user.map((ell) => (
             
              <>
                <div className="client-details">
                  <EmailIcon />
                  
                  {service?.map((ele)=>(   
                   ele.s_paid?.includes( e._id )   ? 
                    <p>  {  ell.email }</p>  :              //masla
                    <p className="email">**********</p>
                    
                   ))}
                </div>

                <div className="client-details">
                  <PhoneAndroidIcon />
                  {service.map((ebn)=>(   
                           ebn.s_paid?.includes(e._id )           ? 
                    <p>{ell.mobile}</p>
                   : 
                    <p className="email">***********</p>
                    ))}
                </div>
              </>
             
            ))}

            <div className="client-details-box">
              <div class="meter">
                <div
                  class="bar"
                  style={{
                    backgroundColor:
                      e.professionals_responded >= 1
                        ? "rgb(71, 191, 156)"
                        : "grey",
                  }}
                ></div>
                <div
                  class="bar"
                  style={{
                    backgroundColor:
                      e.professionals_responded >= 2
                        ? "rgb(71, 191, 156)"
                        : "grey",
                  }}
                ></div>
                <div
                  class="bar"
                  style={{
                    backgroundColor:
                      e.professionals_responded >= 3
                        ? "rgb(71, 191, 156)"
                        : "grey",
                  }}
                ></div>
                <div
                  class="bar"
                  style={{
                    backgroundColor:
                      e.professionals_responded >= 4
                        ? "rgb(71, 191, 156)"
                        : "grey",
                  }}
                ></div>
                <div
                  class="bar"
                  style={{
                    backgroundColor:
                      e.professionals_responded >= 5
                        ? "rgb(71, 191, 156)"
                        : "grey",
                  }}
                ></div>
              </div>
              <div className="bartext">
                {e.professionals_responded}
                <span>/5 professionals have responded.</span>
              </div>
            </div>
            <div className="client-details buttonsContainer ">
              <button
                className="button"
                onClick={() => {
                  responded();
                }}
              >
                Contact
              </button>
              <button className="button">not interested</button>
            </div>
            <div className="client-details credits">
              <MonetizationOnOutlinedIcon />
              <p>{e.credits}</p>
            </div>
            <div className="client-detail">
              <p>Details</p>
            </div>
            {e.question.map((ele, j) => (
              // e.answer.map((el)=>
              <div className="qans">
                <div className="question">{ele}</div>
                <div className="ans">{e.answer[j]}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainLeads;
