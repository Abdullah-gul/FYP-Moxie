import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CompanyDetails.css'
const CompanyDetails = () => {
    const [service,setService]=useState([])
    const user = useSelector((state)=> state.user.value)
    const navigate = useNavigate();
    useEffect(()=>{
      
        axios({
            method: "post",
            url: "/getsinglserviceid",
            data: {
              userId: user.userId,
            },
          })
            .then((res) => {
              // console.log(res.data);
              setService(res.data);
            //   console.log(res.data)
            //   console.log( service)
           
            })
            .catch((err) => {
              console.log(err);
            });
    },[])
function handle(){
  navigate('/settings/myprofile')
}

    let local=0
    let sum
    let num
    check()
    
   function check(){
    const data =  service.map((e )=> e.years === "" && local + 1  )
    const  data1 =  service.map((e )=> e.about === "" && local + 1  )
    const data2 =  service.map((e )=> e.companyPhone === "" && local + 1  )
    const data3 =  service.map((e )=> e.address === "" && local + 1  )
    const data4 =  service.map((e )=> e.link === "" && local + 1  )
  sum = data.pop()+data1.pop()+data2.pop()+data3.pop()+data4.pop()
  console.log(sum)

     if(sum === 0){
      return  num =100
     }if(sum === 1){
       return num =75
     }if(sum === 2){
       return num = 65
     }if(sum === 3){
       return num = 50
     }
     if(sum===4){
       return num = 45
     }else{
       return num = 30
     }
 
  }
   
  return (
    <div className='company-details-main-div'>
        <div className="company-details-main-div-rapper">
            {  service.map((e)=>( 
                  
                <>
             <div className="c-d-image-contaainer">
                <div className="c-d-img" >{e.companyName.charAt(0)}</div>
             </div>
             <div className="c-d-name"></div>
             <p>{e.companyName}</p>
            
             </>
             ))}
            <div>
            <div className='empty-div'></div>
            <div className="company-details-para-butn-wrapper">
                <p>Your profile is {num}% complete</p>
                <div className="c-d-butn-container">
                <button className='c-d-butn' onClick={handle}>Edit</button>
                </div>
                </div>
            </div>
            { 
            <div className="progressline">
                <div style={{"width": sum === 0? "100%": sum === 1 ? "75%":sum === 2 ? "65%" :sum === 3 ? "50%" :  sum === 4 ?"45%" : "30%" }} className="innerprogressline">
             </div>
            </div>
            }
            <p className='c-d-last-para' >Completing your profile is a great way to appeal to customers  · </p>
        </div>
    </div>
  )
}

export default CompanyDetails