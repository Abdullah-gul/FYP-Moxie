import React from 'react'
import "../css/servicelist.css"
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { userInfo } from '../../redux/features/serviceSlice';
const ServiceList = () => {
  const [service, setService] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    axios({
      method: "get",
      url: "/getservices",
    })
      .then((res) => {
        setService(res.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // axios({
    //   method: "get",
    //   url: "/getuser",
    // })
    //   .then((res) => {
    //     setUser(res.data);
    //     // console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
     
  },[]);
  return (
    <div className="main-list">
      {service.map((ele)=>(     
      <div className='main-list-wrapper' onClick={()=>{dispatch(userInfo({singleServiceId : ele._id})); navigate('/single-service')}}>
        <div className='main-list-inner-wrapper'>
        <p className='c_name'>{ele.companyName}</p>
        <p className='s_name'>{ele.service}</p>
        <p className='c-details'>{ele.details}</p>
        <div className='rating'>ratting</div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default ServiceList