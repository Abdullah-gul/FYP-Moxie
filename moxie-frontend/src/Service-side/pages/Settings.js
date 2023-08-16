import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Accountdetails from '../components/settings/Accountdetails'
// import Myprofile from '../components/settings/Myprofile'
// import Reviews from '../components/settings/Reviews'
import './settings.css'
const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className='dash-settings-main-container'>
      <p className='dash-settings-h'>Settings</p>
      <div className='dash-settings-main-wrapper'>
           <p className='dash-settings-h2'>My Profile</p>
           <div> 
            <button className='dast-s-butn' onClick={()=> navigate('myprofile')}>My Profile</button>
            <p className='dash-settings-p'>Your profile is key to attracting customers on Moxie. Use it to explain what makes you different from your competition & why people should work with you</p>
           </div>
           <div>
           <button className='dast-s-butn'>Reviews</button>
           <p  className='dash-settings-p'>All your reviews in one place</p>
           </div>
           <div>
            <button className='dast-s-butn'>Account details</button>
            <p className='dash-settings-p'>The email address and password you use to log in, and the phone numbers we use to contact you privately</p>
           </div>
      </div>
    </div>
  )
}

export default Settings