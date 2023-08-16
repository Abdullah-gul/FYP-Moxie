import React from 'react'
import { useSelector } from "react-redux";
import { useState,useEffect } from 'react';
import axios from 'axios';

const SingleServicePage = () => {
    const [service, setService] = useState([]);
    const [user ,setUser]=useState([])
    const client = useSelector((state)=> state.service.value)
    useEffect(() => {
        axios({
          method: "post",
          url: "/getsingleservice",
          data:{
            service:client.singleServiceId,
          }
          
         
        })
          .then((res) => {
            setService(res.data);
            // console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    
        axios({
          method: "get",
          url: "/getuser",
        })
          .then((res) => {
            setUser(res.data);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
         
      },[]);
    //   const userData = user?.filter((ele)=> (ele._id === service.user))
  return (
    <div>
    {service.map((e)=>( 
        <>
<div>{e.companyName
}</div>    

{user?.filter((ele)=>(ele._id === e.user))?.map((el)=>(  
<div>
{el.email}
</div>
 ))}

</>
))}
</div>
  )
}

export default SingleServicePage