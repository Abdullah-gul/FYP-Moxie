import React from 'react'
import './banner.css'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios";
const Banner = () => {
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
        console.log(res.data);
        setUser(res.data)
      })
      .catch((err) => {
        console.log(err);
      });

},[])
  return (
    <div className='banner-container'>
      <div className='banner'>
        <div className='b1'>
         {user2.map(e=>( <p>Welcome, {e.firstName} {e.lastName}</p>))}
        </div>
        <div className='b2'>
          <p>
            Contact your first customer right away.You'll get their phone number
            and email instantly,backed by our Get Hired Guarantee
          </p>
        </div>
        <div className='b3'>
          <p>Learn more about how Moxie works.</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
